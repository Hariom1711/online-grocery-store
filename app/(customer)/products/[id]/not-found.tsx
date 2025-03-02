import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="container flex min-h-[400px] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Product Not Found</h1>
      <p className="mt-4 text-gray-600">
        The product you're looking for doesn't exist or has been removed.
      </p>
      <Button asChild className="mt-6">
        <Link href="/products">Browse Products</Link>
      </Button>
    </div>
  );
}