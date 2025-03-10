// app/layout.tsx
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { CartProvider } from './context/CartContext';
import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Fresh Grocer - Modern Online Grocery Store',
  description: 'Shop fresh groceries online with our modern and easy-to-use platform.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
          <AuthProvider>
         <CartProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
          {children}
        </ThemeProvider>
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}