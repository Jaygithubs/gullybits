"use client";

import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "../../utils/token";
import { useAuthStore } from "../../store/auth.store";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (!token || !user) {
      router.replace("/login");
    }
    else {
        setChecked(true);
    }
  }, [router,user]);

  if (!checked) return null;

  return children;
}