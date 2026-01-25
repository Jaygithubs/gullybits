export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                    { label: "Total Orders", value: 128, icon: "📦" },
                    { label: "Active Requests", value: 12, icon: "🔥" },
                    { label: "Completed", value: 96, icon: "✅" },
                    { label: "Pending", value: 20, icon: "⏳" },
                ].map((item) => (
                    <div
                        key={item.label}
                        className="card relative overflow-hidden"
                    >
                        <div className="absolute right-4 top-4 text-3xl opacity-20">
                            {item.icon}
                        </div>
                        <p className="text-sm text-muted">{item.label}</p>
                        <h3 className="text-3xl font-bold mt-2 text-primary">
                            {item.value}
                        </h3>
                        <div className="mt-3 h-1 w-12 bg-primary rounded-full" />
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="card">
                <h2 className="text-lg font-semibold mb-5">
                    Recent Activity
                </h2>

                <ul className="space-y-4 text-sm">
                    {[
                        { text: "New food request created", time: "2 min ago" },
                        { text: "Order marked as completed", time: "1 hour ago" },
                        { text: "Profile updated", time: "Yesterday" },
                    ].map((item, i) => (
                        <li
                            key={i}
                            className="flex items-center justify-between border-b last:border-none pb-3"
                        >
                            <span>{item.text}</span>
                            <span className="text-muted text-xs">{item.time}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
