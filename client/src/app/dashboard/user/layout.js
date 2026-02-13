'use client';

import { Roles } from "../../../constants/roles";
import RoleGuard from "../../../components/auth/RoleGuard";

export default function UserLayout({ children }) {
  return (
    <RoleGuard allowedRoles={[Roles.USER]}>
      {children}
    </RoleGuard>
  );
}