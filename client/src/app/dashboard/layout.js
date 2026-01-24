"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const linkClass = (path) =>
        `block px-4 py-2 rounded-lg text-sm transition-all duration-200
     ${pathname === path
            ? "bg-orange-50 text-[#ef9815] font-medium border-l-4 border-[#ef9815]"
            : "text-gray-600 hover:bg-orange-50 hover:text-[#ef9815] hover:border-l-4 hover:border-orange-200"
        }`;

    const navItems = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/dashboard/listings", label: "Food Listings" },
        { href: "/dashboard/delivery/orders", label: "Orders" },
        { href: "/dashboard/profile", label: "Profile" },
    ];

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed md:relative w-64 h-full flex flex-col bg-white border-r z-30 transform transition-transform duration-300
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="p-6 flex items-center justify-between border-b">
                    <div className="text-2xl font-semibold text-[#ef9815]">
                        GullyBits
                    </div>
                    <button
                        className="md:hidden text-gray-500 hover:text-gray-700"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 px-3 py-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={linkClass(item.href)}
                            onClick={() => setSidebarOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-screen">
                {/* Topbar */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6 sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden text-gray-500 hover:text-gray-700"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                        <p className="text-sm text-gray-500">
                            Welcome back <span className="ml-1">👋</span>
                        </p>
                    </div>

                    <button className="btn-primary px-4 py-2 text-sm bg-[#ef9815] text-white rounded-lg hover:bg-orange-600 transition-colors">
                        Logout
                    </button>
                </header>

                {/* Page Content */}
                <section className="flex-1 p-4 md:p-6">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </section>
            </main>
        </div>
    );
}