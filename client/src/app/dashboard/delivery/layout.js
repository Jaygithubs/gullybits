'use client';

import { Roles } from "../../../constants/roles";
import RoleGuard from "../../../components/auth/RoleGuard";

export default function DeliveryLayout({ children }) {
  return (
    <RoleGuard allowedRoles={[Roles.DELIVERY]}>
      {children}
    </RoleGuard>
  );
}