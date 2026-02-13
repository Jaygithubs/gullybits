'use client';

import { Roles } from "../../../constants/roles";
import RoleGuard from "../../../components/auth/RoleGuard";

export default function VendorLayout({ children }) {
    return (    
        <RoleGuard allowedRoles={[Roles.PROVIDER]}>
            {children}
        </RoleGuard>
    );
}   