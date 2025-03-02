// app/components/CartButton.tsx
'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react'; // Assuming you're using lucide-react for icons
import { useCart } from '@/app/context/CartContext';

export default function CartButton() {
  const { state } = useCart();

  return (
    <Link 
      href="/cart" 
      className="relative flex items-center justify-center"
    >
      <ShoppingCart className="w-6 h-6" />
      {state.totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {state.totalItems}
        </span>
      )}
    </Link>
  );
}