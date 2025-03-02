import { Product } from "@/app/types";
import { NextResponse } from "next/server";

const products: Product[] = [
    // Same mock data as above
  ];
  
  export async function GET() {
    // In a real implementation, you would fetch from your database
    // const products = await prisma.product.findMany();
    return NextResponse.json(products);
  }