"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen flex bg-[#f9fafb]">
            {/* Mobile overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:static z-40 w-64 h-full bg-white border-r 
        transform ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300`}
            >
                <div className="p-6 border-b">
                    <h2 className="text-2xl font-bold text-primary">GullyBits</h2>
                    <p className="text-xs text-muted">Dashboard</p>
                </div>

                <nav className="p-4 space-y-2">
                    {[
                        { label: "Overview", path: "/dashboard", icon: "📊" },
                        { label: "Profile", path: "/dashboard/profile", icon: "👤" },
                        { label: "Settings", path: "/dashboard/settings", icon: "⚙️" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            onClick={() => {
                                router.push(item.path);
                                setOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl
              text-sm font-medium hover:bg-orange-50 transition"
                        >
                            <span>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 mt-auto border-t">
                    <button
                        onClick={() => router.push("/login")}
                        className="btn-primary w-full"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-3">
                        <button
                            className="md:hidden text-xl"
                            onClick={() => setOpen(true)}
                        >
                            ☰
                        </button>
                        <h1 className="text-lg font-semibold">Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-muted hidden sm:block">
                            Welcome back 👋
                        </span>
                        <div className="w-9 h-9 rounded-full bg-orange-100 text-primary flex items-center justify-center font-bold">
                            N
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="p-4 md:p-6">{children}</main>
            </div>
        </div>
    );
}
