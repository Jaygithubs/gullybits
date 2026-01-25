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
            <aside className="w-64 bg-white border-r flex flex-col">
                {/* Brand */}
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold text-[#ef9815]">GullyBits</h2>
                    <p className="text-xs text-gray-600">Dashboard</p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1">
                    <button
                        onClick={() => router.push("/dashboard")}
                        className="
        w-full flex items-center gap-3 px-4 py-3 rounded-lg
        text-sm font-semibold text-gray-900
        hover:bg-[#ef9815] hover:text-white
        transition
      "
                    >
                        <span className="text-base">📊</span>
                        Overview
                    </button>

                    <button
                        onClick={() => router.push("/dashboard/profile")}
                        className="
        w-full flex items-center gap-3 px-4 py-3 rounded-lg
        text-sm font-semibold text-gray-900
        hover:bg-[#ef9815] hover:text-white
        transition
      "
                    >
                        <span className="text-base">👤</span>
                        Profile
                    </button>

                    <button
                        onClick={() => router.push("/dashboard/settings")}
                        className="
        w-full flex items-center gap-3 px-4 py-3 rounded-lg
        text-sm font-semibold text-gray-900
        hover:bg-[#ef9815] hover:text-white
        transition
      "
                    >
                        <span className="text-base">⚙️</span>
                        Settings
                    </button>
                </nav>

                {/* Logout */}
                <div className="p-4 border-t">
                    <button
                        onClick={() => router.push("/login")}
                        className="
                            w-full flex items-center gap-3 px-4 py-3 rounded-lg
                            text-sm font-semibold hover:bg-transparent hover:text-orange-500 hover:border-orange-500
                            border border-transparent
                            bg-orange-400 text-white
                            transition
                        "
                    >
                        <span className="text-base">🚪</span>
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
