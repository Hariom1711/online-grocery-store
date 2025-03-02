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
    description: "Sweet and fresh organic bananas grown without pesticides. These premium bananas are sourced from sustainable farms and are perfect for smoothies, baking, or enjoying as a healthy snack.",
    price: 1.99,
    category: "Fruits",
    imageUrl: "/images/banana.jpg",
    stockQuantity: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Include other products from the mock data
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