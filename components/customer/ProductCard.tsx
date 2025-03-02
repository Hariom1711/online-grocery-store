import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product } from "@/app/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-900 group-hover:text-green-600">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-medium text-gray-900">${product.price.toFixed(2)}</p>
          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart functionality will be implemented later
              console.log(`Add ${product.id} to cart`);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
