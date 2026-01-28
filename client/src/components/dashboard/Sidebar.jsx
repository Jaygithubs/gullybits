'use client';
import { Button } from "../common/Button";
import { SidebarLink } from "./SideBarLink";
import {
  Truck,
  PackageCheck,
  Users,
  ClipboardList,
  Store,
  Utensils,
  ReceiptText,
} from "lucide-react";

const Sidebar = () => {
    return (
        <div className="bg-red-100">
            <div className="flex flex-col justify-between h-full min-h-screen p-4">

                <aside>
                    <header>
                        <h2 className="text-xl font-bold text-[var(--color-primary)]">GullyBits</h2>
                    </header>
                    <ul className="space-y-5 py-5">
                        <SidebarLink href="/dashboard/delivery" icon={Truck}>Delivery</SidebarLink>
                        <SidebarLink href="/dashboard/delivery/orders" icon={PackageCheck}>Delivery Boy Orders</SidebarLink>
                        <SidebarLink href="/dashboard/user" icon={Users}>Users</SidebarLink>
                        <SidebarLink href="/dashboard/user/orders" icon={ClipboardList}>User Orders</SidebarLink>
                        <SidebarLink href="/dashboard/vendor" icon={Store}>Vendors</SidebarLink>
                        <SidebarLink href="/dashboard/vendor/foods" icon={Utensils}>Vendor Foods</SidebarLink>
                        <SidebarLink href="/dashboard/vendor/orders" icon={ReceiptText}>Vendor Orders</SidebarLink>
                    </ul>
                </aside>

                <Button>Logout</Button>

            </div>
        </div>
    );
}

export default Sidebar;