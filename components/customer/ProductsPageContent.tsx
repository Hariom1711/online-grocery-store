"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductGrid } from "./ProductGrid";
import { CategoryFilter } from "./CategoryFilter";
import { Product } from "@/app/types";

// Temporary mock data - replace with API call later
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

export function ProductsPageContent() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState("name-asc");

  // Get unique categories from products
  const categories = Array.from(new Set(products.map((product) => product.category)));

  // Filter and sort products when dependencies change
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory) {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [products, searchQuery, selectedCategory, sortOption]);

  // This will be replaced with an API call in the future
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch('/api/products');
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-1/3">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/4">
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="price-asc">Price (Low to High)</SelectItem>
              <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p className="mt-8 text-center text-gray-500">No products found. Try a different search or category.</p>
      )}
    </div>
  );
}