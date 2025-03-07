// app/profile/page.tsx

import { redirect } from "next/navigation";
import { requireAuth } from "@/lib/auth";
import Link from "next/link";

export default async function Profile() {
  // Verify user is authenticated
  const session = await requireAuth();

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <div className="mt-1 text-gray-900">{session.user.name}</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <div className="mt-1 text-gray-900">{session.user.email}</div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Account Type</label>
            <div className="mt-1 text-gray-900 capitalize">{session.user.role}</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Account Actions</h2>
        
        <div className="space-y-4">
          <Link href="/profile/edit" className="block text-indigo-600 hover:text-indigo-500">
            Edit Profile
          </Link>
          
          <Link href="/profile/change-password" className="block text-indigo-600 hover:text-indigo-500">
            Change Password
          </Link>
          
          <Link href="/orders" className="block text-indigo-600 hover:text-indigo-500">
            View Order History
          </Link>
        </div>
      </div>
    </div>
  );
}

