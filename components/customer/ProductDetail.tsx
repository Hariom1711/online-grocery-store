// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Product } from "@/app/types";

// interface ProductDetailProps {
//   product: Product;
// }

// export function ProductDetail({ product }: ProductDetailProps) {
//   const [quantity, setQuantity] = useState(1);

//   const incrementQuantity = () => {
//     if (quantity < product.stockQuantity) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const addToCart = () => {
//     // This will be implemented when we build the cart functionality
//     console.log(`Adding ${quantity} of product ${product.id} to cart`);
//     // Show success message or redirect to cart
//   };

//   return (
//     <div>
//       <Link href="/products" className="mb-6 inline-flex items-center text-sm text-gray-600 hover:text-green-600">
//         <ChevronLeft className="mr-1 h-4 w-4" />
//         Back to Products
//       </Link>
      
//       <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
//         <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
//           <Image
//             src={product.imageUrl || "/placeholder.png"}
//             alt={product.name}
//             fill
//             className="object-cover"
//           />
//         </div>
        
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
//           <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
          
//           <div className="mt-4">
//             <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
//           </div>
          
//           <div className="mt-6">
//             <h2 className="text-lg font-medium text-gray-900">Description</h2>
//             <p className="mt-2 text-gray-600">{product.description}</p>
//           </div>
          
//           <div className="mt-6">
//             <h2 className="text-lg font-medium text-gray-900">Quantity</h2>
//             <div className="mt-2 flex items-center">
//               <Button 
//                 variant="outline" 
//                 size="icon" 
//                 onClick={decrementQuantity}
//                 disabled={quantity <= 1}
//               >
//                 -
//               </Button>
//               <span className="mx-4 w-8 text-center">{quantity}</span>
//               <Button 
//                 variant="outline" 
//                 size="icon" 
//                 onClick={incrementQuantity}
//                 disabled={quantity >= product.stockQuantity}
//               >
//                 +
//               </Button>
//             </div>
//           </div>
          
//           <div className="mt-6">
//             <p className="text-sm text-gray-600">
//               {product.stockQuantity > 0 
//                 ? `In stock: ${product.stockQuantity} available` 
//                 : "Out of stock"}
//             </p>
//           </div>
          
//           <div className="mt-6">
//             <Button 
//               className="w-full"
//               onClick={addToCart}
//               disabled={product.stockQuantity <= 0}
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </div>
//       </div>
      
//       <div className="mt-12">
//         <h2 className="text-xl font-bold text-gray-900">Related Products</h2>
//         <p className="mt-2 text-gray-600">
//           This will display related products in the same category.
//           (We'll implement this feature when we set up recommendations)
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/app/types";
import { useCart } from "@/app/context/CartContext";
// import { toast } from "@/components/ui/use-toast"; // If you have a toast component

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const incrementQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.imageUrl || "/placeholder.png",
    });

    // Show success message
    if (typeof window !== 'undefined') {
      // If you have a toast component
      if (typeof toast !== 'undefined') {
        toast({
          title: "Added to cart",
          description: `${quantity} × ${product.name} added to your cart`,
        });
      } else {
        // Fallback to alert if toast is not available
        alert(`Added ${quantity} × ${product.name} to your cart`);
      }
    }
  };

  return (
    <div>
      <Link href="/products" className="mb-6 inline-flex items-center text-sm text-gray-600 hover:text-green-600">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Products
      </Link>
      
      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
          
          <div className="mt-4">
            <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">Quantity</h2>
            <div className="mt-2 flex items-center">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="mx-4 w-8 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={incrementQuantity}
                disabled={quantity >= product.stockQuantity}
              >
                +
              </Button>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-gray-600">
              {product.stockQuantity > 0 
                ? `In stock: ${product.stockQuantity} available` 
                : "Out of stock"}
            </p>
          </div>
          
          <div className="mt-6">
            <Button 
              className="w-full"
              onClick={addToCart}
              disabled={product.stockQuantity <= 0}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">Related Products</h2>
        <p className="mt-2 text-gray-600">
          This will display related products in the same category.
          (We'll implement this feature when we set up recommendations)
        </p>
      </div>
    </div>
  );
}