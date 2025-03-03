import { Suspense } from "react";
// import { ProductDetail } from "@/components/customer/ProductDetail";
import { notFound } from "next/navigation";

// This will be replaced with a database query in the future
import { Product } from "@/app/types";
import { ProductDetail } from "@/components/customer/ProductDetail";

// For now, we'll use mock data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Organic Bananas",
    description: "Sweet and fresh organic bananas",
    price: 1.99,
    category: "Fruits",
    imageUrl: "/images/banana.jpg",
    stockQuantity: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Fresh Milk",
    description: "Pasteurized whole milk",
    price: 3.49,
    category: "Dairy",
    imageUrl: "/images/milk.jpg",
    stockQuantity: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Brown Eggs",
    description: "Farm fresh brown eggs",
    price: 4.99,
    category: "Dairy",
    imageUrl: "/images/eggs.jpg",
    stockQuantity: 30,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Whole Wheat Bread",
    description: "Freshly baked whole wheat bread",
    price: 2.99,
    category: "Bakery",
    imageUrl: "/images/bread.jpg",
    stockQuantity: 15,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Red Apples",
    description: "Crisp and sweet red apples",
    price: 1.49,
    category: "Fruits",
    imageUrl: "/images/apple.jpg",
    stockQuantity: 40,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Tomatoes",
    description: "Ripe and juicy tomatoes",
    price: 2.49,
    category: "Vegetables",
    imageUrl: "/images/tomato.jpg",
    stockQuantity: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    name: "Chicken Breast",
    description: "Boneless skinless chicken breast",
    price: 6.99,
    category: "Meat",
    imageUrl: "/images/chicken.jpg",
    stockQuantity: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    name: "Spinach",
    description: "Fresh organic spinach",
    price: 3.99,
    category: "Vegetables",
    imageUrl: "/images/spinach.jpg",
    stockQuantity: 15,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
export async function generateMetadata({ params }: { params: { id: string } }) {
  // In a real implementation, you'd fetch this data from your database
  const product = mockProducts.find(p => p.id === params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found',
    };
  }
  
  return {
    title: `${product.name} | Grocery Store`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real implementation, you'd fetch this data from your database
  const product = mockProducts.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="container py-8">
      <Suspense fallback={<div>Loading product details...</div>}>
        <ProductDetail product={product} />
      </Suspense>
    </div>
  );
}