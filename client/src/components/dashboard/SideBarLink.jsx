"use client";

import Link from "next/link";

export function SidebarLink({ href, icon:Icon, children }) {
  return (
    <li className="hover:bg-[var(--color-primary)] hover:text-white rounded px-4 py-2 transition duration-300">
      <Link href={href} className="flex items-center gap-3">
        <Icon size={18} />
        {children}
      </Link>
    </li>
  );
}
