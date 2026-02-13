"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/auth.store";

export default function RoleGuard({ allowedRoles = [], children }) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // user not ready (logout / refresh)
    if (!user) {
      setAuthorized(false);
      return;
    }

    // exact role match (case-sensitive)
    const hasAccess = allowedRoles.includes(user.role);

    if (!hasAccess) {
      router.replace("/unauthorized");
      return;
    }

    setAuthorized(true);
  }, [user, allowedRoles, router]);

  if (!user || !authorized) return null;

  return children;
}
