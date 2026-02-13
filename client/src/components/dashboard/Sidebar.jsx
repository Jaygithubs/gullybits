'use client';

import { Button } from "../common/Button";
import { SidebarLink } from "./SideBarLink";
import { useAuthStore } from "../../store/auth.store";
import { useRouter } from "next/navigation";
import {
  Truck,
  PackageCheck,
  Users,
  ClipboardList,
  Store,
  Utensils,
  ReceiptText,
  X,
} from "lucide-react";

const Sidebar = ({ onClose }) => {

  const router = useRouter();
  const Logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const logout = () => {
    router.replace("/login");
    Logout();
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-between p-4">

      {/* Logo + Close button */}
      <div className="flex items-center justify-between py-5">
        <h2 className="text-xl font-bold text-[var(--color-primary)]">
          GullyBits
        </h2>

        {/* Close icon (mobile only) */}
        <button
          onClick={onClose}
          className="lg:hidden text-gray-600 hover:text-black"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <aside className="flex-1">
        <ul className="space-y-5">
          {
            user && user.role === 'Admin' && (
              <>
                <SidebarLink href="/dashboard/admin" icon={Users}>Admins</SidebarLink>
                <SidebarLink href="/dashboard/user" icon={Users}>Users</SidebarLink>
              </>
            )
          }

          {
            user && user.role === 'Delivery' && (
              <>
                <SidebarLink href="/dashboard/delivery" icon={Truck}>Delivery</SidebarLink>
                <SidebarLink href="/dashboard/delivery/orders" icon={PackageCheck}>Delivery Boy Orders</SidebarLink>
              </>
            )
          }

          {
            user && user.role === 'Provider' && (
              <>
                <SidebarLink href="/dashboard/vendor/foods" icon={Utensils}>Vendor Foods</SidebarLink>
                <SidebarLink href="/dashboard/vendor/add-food" icon={Utensils}>Add New Food</SidebarLink>
                <SidebarLink href="/dashboard/vendor/orders" icon={ReceiptText}>Vendor Orders</SidebarLink>
              </>
            )   
          }
          
          {
            user && user.role === 'User' && (
              <>
                <SidebarLink href="/dashboard/user/orders" icon={ClipboardList}>User Orders</SidebarLink>
                <SidebarLink href="/dashboard/user/orders" icon={ClipboardList}>User Orders</SidebarLink>
              </>
            )
          }

        </ul>
      </aside>

      {/* Footer */}
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Sidebar;
