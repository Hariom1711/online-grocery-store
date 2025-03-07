// // app/api/auth/register/route.ts

// import { NextResponse } from "next/server";
// import { hash } from "bcrypt";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, password } = body;

//     // Validate input
//     if (!name || !email || !password) {
//       return NextResponse.json(
//         { message: "Missing required fields" },
//         { status: 400 }
//       );
//     }
//     console.log( prisma.user.findMany(),"users");
    

//     // Check if user already exists
//     const existingUser = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (existingUser) {
//       return NextResponse.json(
//         { message: "User with this email already exists" },
//         { status: 409 }
//       );
//     }

//     // Hash password
//     const hashedPassword = await hash(password, 10);

//     // Find the customer role
//     let customerRole = await prisma.role.findUnique({
//       where: {
//         name: "customer",
//       },
//     });

//     // Create the customer role if it doesn't exist
//     if (!customerRole) {
//       customerRole = await prisma.role.create({
//         data: {
//           name: "customer",
//         },
//       });
//     }

//     // Create new user
//     const newUser = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//         roleId: customerRole.id,
//       },
//     });

//     // Create a cart for the new user
//     await prisma.cart.create({
//       data: {
//         userId: newUser.id,
//       },
//     });

//     // Strip password from response
//     const { password: _, ...userWithoutPassword } = newUser;

//     return NextResponse.json(
//       {
//         message: "User registered successfully",
//         user: userWithoutPassword,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Registration error:", error);
//     return NextResponse.json(
//       { message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
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
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Find or create the 'customer' role
    let customerRole = await prisma.role.findUnique({
      where: { name: "customer" },
    });

    if (!customerRole) {
      customerRole = await prisma.role.create({
        data: { name: "customer" },
      });
    }

    // Ensure role ID is valid
    if (!customerRole?.id) {
      return NextResponse.json(
        { message: "Role creation failed" },
        { status: 500 }
      );
    }

    // Create new user with roleId instead of role
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId: customerRole.id, // ✅ Correct reference
      },
    });

    // Create a cart for the new user
    await prisma.cart.create({
      data: {
        userId: newUser.id,
      },
    });

    // Strip password from response
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: userWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
