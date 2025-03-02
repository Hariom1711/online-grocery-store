// // app/page.tsx
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { ShoppingCart, ArrowRight, Search } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       {/* Navigation Bar */}
//       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container flex h-16 items-center justify-between">
//           <div className="flex items-center gap-6">
//             <Link href="/" className="flex items-center space-x-2">
//               <span className="text-xl font-bold text-gradient">Fresh Grocer</span>
//             </Link>
//             <nav className="hidden md:flex gap-6">
//               <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
//                 All Products
//               </Link>
//               <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
//                 Categories
//               </Link>
//               <Link href="/deals" className="text-sm font-medium hover:text-primary transition-colors">
//                 Special Deals
//               </Link>
//               <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
//                 About Us
//               </Link>
//             </nav>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="relative hidden md:flex items-center">
//               <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
//               <input
//                 type="search"
//                 placeholder="Search products..."
//                 className="rounded-full bg-background pl-8 pr-4 py-2 text-sm ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             </div>
//             <Button size="icon" variant="ghost">
//               <ShoppingCart className="h-5 w-5" />
//             </Button>
//             <Button variant="ghost" size="sm" className="gap-1.5">
//               Sign In
//             </Button>
//             <Button size="sm">Get Started</Button>
//           </div>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-fresh-50 to-fresh-100 dark:from-fresh-900/20 dark:to-fresh-800/20" />
//           <div className="container relative grid grid-cols-1 lg:grid-cols-2 gap-8 py-24 md:py-32">
//             <div className="flex flex-col justify-center space-y-5">
//               <div className="inline-block rounded-lg bg-fresh-100 px-3 py-1 text-sm text-fresh-800 dark:bg-fresh-900/30 dark:text-fresh-400 animate-fadeIn">
//                 🌱 Fresh from the farm to your table
//               </div>
//               <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl animate-slideIn">
//                 Fresh Groceries, <br />
//                 <span className="text-gradient">Delivered Fast</span>
//               </h1>
//               <p className="text-muted-foreground md:text-lg max-w-[600px] animate-fadeIn" style={{ animationDelay: "0.2s" }}>
//                 Shop premium quality groceries from the comfort of your home. 
//                 We deliver fresh produce, meats, dairy, and pantry essentials directly to your doorstep.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 pt-3 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
//                 <Button size="lg" className="gap-2">
//                   Shop Now <ArrowRight className="h-4 w-4" />
//                 </Button>
//                 <Button variant="outline" size="lg">
//                   View Special Offers
//                 </Button>
//               </div>
//             </div>
//             <div className="hidden lg:flex items-center justify-center">
//               <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl hover-scale">
//                 <div className="absolute inset-0 bg-gradient-to-br from-fresh-500/20 to-fresh-800/40" />
//                 {/* This would be an image in a real implementation */}
//                 <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
//                   Hero Image (Fresh Groceries)
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Categories Section */}
//         <section className="py-16 bg-gray-50 dark:bg-gray-900">
//           <div className="container">
//             <div className="flex flex-col items-center text-center mb-12">
//               <h2 className="text-3xl font-bold mb-3">Shop by Category</h2>
//               <p className="text-muted-foreground max-w-[600px]">
//                 Explore our wide range of fresh and high-quality products
//               </p>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//               {['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Bakery', 'Beverages'].map((category) => (
//                 <Link 
//                   href={`/category/${category.toLowerCase()}`} 
//                   key={category}
//                   className="group relative flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 card-shadow hover-scale"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-fresh-100 dark:bg-fresh-900/30 flex items-center justify-center mb-4 group-hover:bg-fresh-200 transition-colors">
//                     <span className="text-2xl">{getEmoji(category)}</span>
//                   </div>
//                   <h3 className="font-medium">{category}</h3>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Featured Products */}
//         <section className="py-16">
//           <div className="container">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-3xl font-bold">Featured Products</h2>
//               <Button variant="ghost" className="gap-2">
//                 View All <ArrowRight className="h-4 w-4" />
//               </Button>
//             </div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[1, 2, 3, 4].map((idx) => (
//                 <div key={idx} className="group relative rounded-lg overflow-hidden card-shadow">
//                   <div className="relative aspect-square bg-gray-100 dark:bg-gray-800">
//                     <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
//                       Product Image {idx}
//                     </div>
//                   </div>
//                   <div className="absolute top-3 right-3">
//                     <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-fresh-100 text-fresh-800 dark:bg-fresh-900 dark:text-fresh-300">
//                       Sale
//                     </span>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-medium mb-1">Organic Product {idx}</h3>
//                     <p className="text-muted-foreground text-sm mb-2">Freshly harvested</p>
//                     <div className="flex justify-between items-center">
//                       <div className="font-medium">$5.99</div>
//                       <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
//                         <ShoppingCart className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
        
//         {/* Features Section */}
//         <section className="py-16 bg-gray-50 dark:bg-gray-900">
//           <div className="container">
//             <div className="flex flex-col items-center text-center mb-12">
//               <h2 className="text-3xl font-bold mb-3">Why Choose Fresh Grocer</h2>
//               <p className="text-muted-foreground max-w-[600px]">
//                 We strive to provide the best shopping experience for our customers
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 { title: "Fresh Produce", description: "Our products are sourced directly from local farms and delivered fresh to your doorstep." },
//                 { title: "Fast Delivery", description: "Get your groceries delivered within hours, with real-time tracking and updates." },
//                 { title: "Quality Guaranteed", description: "We stand behind the quality of our products. Not satisfied? We'll refund you." }
//               ].map((feature, idx) => (
//                 <div key={idx} className="relative p-6 rounded-xl bg-white dark:bg-gray-800 card-shadow">
//                   <div className="w-12 h-12 rounded-full bg-fresh-100 dark:bg-fresh-900/30 flex items-center justify-center mb-4">
//                     <span className="text-2xl">{idx === 0 ? "🥬" : idx === 1 ? "🚚" : "✅"}</span>
//                   </div>
//                   <h3 className="font-medium text-xl mb-2">{feature.title}</h3>
//                   <p className="text-muted-foreground">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="border-t py-12 bg-white dark:bg-gray-950">
//         <div className="container">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="space-y-4">
//               <h3 className="text-xl font-bold text-gradient">Fresh Grocer</h3>
//               <p className="text-muted-foreground">Fresh food, delivered to your doorstep.</p>
//             </div>
            
//             {[
//               { title: "Company", links: ["About Us", "Blog", "Careers", "Contact Us"] },
//               { title: "Help", links: ["FAQs", "Shipping", "Returns", "Payment Options"] },
//               { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Cookie Policy"] }
//             ].map((section, idx) => (
//               <div key={idx} className="space-y-4">
//                 <h3 className="font-medium">{section.title}</h3>
//                 <ul className="space-y-2">
//                   {section.links.map((link) => (
//                     <li key={link}>
//                       <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
//                         {link}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
          
//           <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-sm text-muted-foreground">
//               © 2025 Fresh Grocer. All rights reserved.
//             </p>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               {["Twitter", "Facebook", "Instagram"].map((social) => (
//                 <a 
//                   key={social} 
//                   href="#" 
//                   className="text-muted-foreground hover:text-foreground transition-colors"
//                 >
//                   {social}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // Helper function for emojis
// function getEmoji(category: string): string {
//   switch (category.toLowerCase()) {
//     case 'fruits': return '🍎';
//     case 'vegetables': return '🥦';
//     case 'dairy': return '🥛';
//     case 'meat': return '🥩';
//     case 'bakery': return '🍞';
//     case 'beverages': return '🧃';
//     default: return '🛒';
//   }
// }



// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowRight, Search } from 'lucide-react';
import CartButton from '@/components/CartButton';

export default function Home() {
  // Featured products data - this would eventually come from your database
  const featuredProducts = [
    { 
      id: "1", 
      name: "Organic Bananas", 
      description: "Sweet and fresh", 
      price: 1.99, 
      image: "/images/banana.jpg",
      sale: true 
    },
    { 
      id: "2", 
      name: "Fresh Milk", 
      description: "Pasteurized whole milk", 
      price: 3.49, 
      image: "/images/milk.jpg",
      sale: false
    },
    { 
      id: "3", 
      name: "Brown Eggs", 
      description: "Farm fresh dozen", 
      price: 4.99, 
      image: "/images/eggs.jpg",
      sale: true
    },
    { 
      id: "4", 
      name: "Whole Wheat Bread", 
      description: "Freshly baked", 
      price: 2.99, 
      image: "/images/bread.jpg",
      sale: false
    }
  ];

  // Categories with proper routing
  const categories = [
    { name: 'Fruits', emoji: '🍎' },
    { name: 'Vegetables', emoji: '🥦' },
    { name: 'Dairy', emoji: '🥛' },
    { name: 'Meat', emoji: '🥩' },
    { name: 'Bakery', emoji: '🍞' },
    { name: 'Beverages', emoji: '🧃' }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gradient">Fresh Grocer</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
                All Products
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
                Special Deals
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products..."
                className="rounded-full bg-background pl-8 pr-4 py-2 text-sm ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button size="icon" variant="ghost">
              {/* <ShoppingCart className="h-5 w-5" /> */}
              <CartButton />
            </Button>
            <Button variant="ghost" size="sm" className="gap-1.5">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-fresh-50 to-fresh-100 dark:from-fresh-900/20 dark:to-fresh-800/20" />
          <div className="container relative grid grid-cols-1 lg:grid-cols-2 gap-8 py-24 md:py-32">
            <div className="flex flex-col justify-center space-y-5">
              <div className="inline-block rounded-lg bg-fresh-100 px-3 py-1 text-sm text-fresh-800 dark:bg-fresh-900/30 dark:text-fresh-400 animate-fadeIn">
                🌱 Fresh from the farm to your table
              </div>
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl animate-slideIn">
                Fresh Groceries, <br />
                <span className="text-gradient">Delivered Fast</span>
              </h1>
              <p className="text-muted-foreground md:text-lg max-w-[600px] animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Shop premium quality groceries from the comfort of your home. 
                We deliver fresh produce, meats, dairy, and pantry essentials directly to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-3 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/products">
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/products">
                    View Special Offers
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl hover-scale">
                <div className="absolute inset-0 bg-gradient-to-br from-fresh-500/20 to-fresh-800/40" />
                {/* This would be an image in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
                  Hero Image (Fresh Groceries)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Shop by Category</h2>
              <p className="text-muted-foreground max-w-[600px]">
                Explore our wide range of fresh and high-quality products
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Link 
                  href={`/products?category=${category.name.toLowerCase()}`} 
                  key={category.name}
                  className="group relative flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 card-shadow hover-scale"
                >
                  <div className="w-16 h-16 rounded-full bg-fresh-100 dark:bg-fresh-900/30 flex items-center justify-center mb-4 group-hover:bg-fresh-200 transition-colors">
                    <span className="text-2xl">{category.emoji}</span>
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Button variant="ghost" className="gap-2" asChild>
                <Link href="/products">
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Link 
                  key={product.id} 
                  href={`/products/${product.id}`}
                  className="group relative rounded-lg overflow-hidden card-shadow"
                >
                  <div className="relative aspect-square bg-gray-100 dark:bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      {/* Replace with actual image */}
                      {product.name}
                    </div>
                  </div>
                  {product.sale && (
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-fresh-100 text-fresh-800 dark:bg-fresh-900 dark:text-fresh-300">
                        Sale
                      </span>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="font-medium">${product.price.toFixed(2)}</div>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Why Choose Fresh Grocer</h2>
              <p className="text-muted-foreground max-w-[600px]">
                We strive to provide the best shopping experience for our customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Fresh Produce", description: "Our products are sourced directly from local farms and delivered fresh to your doorstep.", emoji: "🥬" },
                { title: "Fast Delivery", description: "Get your groceries delivered within hours, with real-time tracking and updates.", emoji: "🚚" },
                { title: "Quality Guaranteed", description: "We stand behind the quality of our products. Not satisfied? We'll refund you.", emoji: "✅" }
              ].map((feature, idx) => (
                <div key={idx} className="relative p-6 rounded-xl bg-white dark:bg-gray-800 card-shadow">
                  <div className="w-12 h-12 rounded-full bg-fresh-100 dark:bg-fresh-900/30 flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                  <h3 className="font-medium text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold text-gradient">Fresh Grocer</Link>
              <p className="text-muted-foreground">Fresh food, delivered to your doorstep.</p>
            </div>
            
            {[
              { title: "Company", links: ["About Us", "Blog", "Careers", "Contact Us"] },
              { title: "Help", links: ["FAQs", "Shipping", "Returns", "Payment Options"] },
              { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Cookie Policy"] }
            ].map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-medium">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Fresh Grocer. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {["Twitter", "Facebook", "Instagram"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}