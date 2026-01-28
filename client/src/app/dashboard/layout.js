import Sidebar from "../../components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-12">
                <div class="col-span-2 min-h-screen">
                    <Sidebar />
                </div>
                <div class="col-span-10">
                    {children}
                </div>
            </div>

        </div>
    );
}
