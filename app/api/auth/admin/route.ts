// app/api/auth/admin/route.ts
// This is a protected route to create an admin account (only for initial setup)

import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { auth } from "../../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Only allow this endpoint to be used in development or with a special key
    if (process.env.NODE_ENV !== "development" && request.headers.get("x-admin-key") !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, email, password } = body;

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Find or create the admin role
    let adminRole = await prisma.role.findUnique({
      where: {
        name: "admin",
      },
    });

    if (!adminRole) {
      adminRole = await prisma.role.create({
        data: {
          name: "admin",
        },
      });
    }

    // Create new admin user
    const newAdmin = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId: adminRole.id,
      },
    });

    // Strip password from response
    const { password: _, ...adminWithoutPassword } = newAdmin;

    return NextResponse.json(
      {
        message: "Admin user created successfully",
        user: adminWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admin creation error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}