// components/Navbar.tsx

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { data: session, status } = useSession();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      if (session) {
        try {
          const response = await fetch('/api/cart');
          const data = await response.json();
          if (data.items) {
            setCartItemCount(data.items.reduce((acc: number, item: any) => acc + item.quantity, 0));
          }
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      }
    };

    fetchCart();
    // Set up an interval to refresh cart data every minute
    const interval = setInterval(fetchCart, 60000);
    return () => clearInterval(interval);
  }, [session]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-600 text-white py-4 px-6 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Online Grocery
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-green-200">
            Home
          </Link>
          <Link href="/products" className="hover:text-green-200">
            Products
          </Link>
          
          {status === "authenticated" && session?.user?.role === "admin" && (
            <Link href="/admin" className="hover:text-green-200">
              Admin Dashboard
            </Link>
          )}

          {status === "authenticated" ? (
            <>
              <Link href="/cart" className="hover:text-green-200 relative">
                <FaShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-green-200">
                  <FaUser size={18} />
                  <span>{session.user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    My Orders
                  </Link>
                  <button 
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link 
              href="/auth/signin" 
              className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-100"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <Link href="/" className="hover:text-green-200 py-2">
            Home
          </Link>
          <Link href="/products" className="hover:text-green-200 py-2">
            Products
          </Link>
          
          {status === "authenticated" && session?.user?.role === "admin" && (
            <Link href="/admin" className="hover:text-green-200 py-2">
              Admin Dashboard
            </Link>
          )}

          {status === "authenticated" ? (
            <>
              <Link href="/cart" className="hover:text-green-200 py-2 flex items-center">
                <FaShoppingCart size={20} className="mr-2" />
                <span>Cart ({cartItemCount})</span>
              </Link>
              <Link href="/profile" className="hover:text-green-200 py-2">
                Profile
              </Link>
              <Link href="/orders" className="hover:text-green-200 py-2">
                My Orders
              </Link>
              <button 
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-left hover:text-green-200 py-2"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link 
              href="/auth/signin" 
              className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-100 inline-block"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}