'use client';

import { Roles } from "../../../constants/roles";
import RoleGuard from "../../../components/auth/RoleGuard";

export default function AdminLayout({ children }) {
  return (
    <RoleGuard allowedRoles={[Roles.ADMIN]}>
      {children}
    </RoleGuard>
  );
}