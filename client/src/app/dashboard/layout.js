'use client';

import AuthGuard from "../../components/auth/AuthGuard";
import Sidebar from "../../components/dashboard/Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    
    <AuthGuard>

      <div className="min-h-screen bg-[var(--color-bg)]">

        {/* Mobile Header */}
        <header className="flex items-center justify-between p-4 lg:hidden bg-white border-b">
          <h2 className="text-xl font-bold text-[var(--color-primary)]">
            GullyBits
          </h2>
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu size={22} />
          </button>
        </header>

        <div className="flex">

          {/* Mobile Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={`
              fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg
              transform transition-transform duration-300
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              lg:static lg:translate-x-0 lg:shadow-none
            `}
          >
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 lg:p-6">
            {children}
          </main>

        </div>
      </div>

    </AuthGuard>
  );
}
