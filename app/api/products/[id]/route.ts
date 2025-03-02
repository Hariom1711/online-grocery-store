import { NextResponse } from "next/server";
import { notFound } from "next/navigation";
import { Product } from "@/app/types";

// This is a placeholder. You'll replace this with actual database queries using Prisma
const products: Product[] = [
  // Same mock data as above
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return new NextResponse(null, { status: 404 });
  }
  
  return NextResponse.json(product);
}