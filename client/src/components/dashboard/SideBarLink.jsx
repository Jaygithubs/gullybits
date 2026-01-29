'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarLink({ href, icon: Icon, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`
          flex items-center gap-3 px-4 py-3 rounded-lg
          transition-all duration-200
          ${
            isActive
              ? "bg-[var(--color-primary)] text-white"
              : "text-gray-600 hover:bg-[var(--color-primary)] hover:text-white"
          }
        `}
      >
        <Icon size={18} />
        <span>{children}</span>
      </Link>
    </li>
  );
}
