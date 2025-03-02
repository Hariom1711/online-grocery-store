import { Suspense } from "react";
import { ProductsPageContent } from "@/components/customer/ProductsPageContent";

export const metadata = {
  title: "Browse Products | Grocery Store",
  description: "Browse our fresh products and groceries",
};

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">Our Products</h1>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsPageContent />
      </Suspense>
    </div>
  );
}
