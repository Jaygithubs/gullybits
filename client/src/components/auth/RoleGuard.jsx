"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/auth.store";

export default function RoleGuard({ allowedRole, children }) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user && user.role !== allowedRole) {
      router.push("/unauthorized");
    }
  }, [user, allowedRole, router]);

  return children;
}