// app/admin/page.tsx

import { redirect } from "next/navigation";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth";

export default async function AdminDashboard() {
  // Verify admin access on the server side
  const session = await requireAdmin();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard 
          title="Manage Products" 
          description="Add, edit, or delete products from the store"
          link="/admin/products"
        />
        <DashboardCard 
          title="Manage Orders" 
          description="View and update order statuses"
          link="/admin/orders"
        />
        <DashboardCard 
          title="User Management" 
          description="View and manage user accounts"
          link="/admin/users"
        />
        <DashboardCard 
          title="Store Analytics" 
          description="View sales reports and customer analytics"
          link="/admin/analytics"
        />
      </div>
    </div>
  );
}

function DashboardCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link href={link} className="block">
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}