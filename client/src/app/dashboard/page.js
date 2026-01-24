"use client";

import { Card, CardContent } from "@/components/common/card";
import { Button } from "@/components/common/Button";
import { Users, Package, Truck, BarChart3, CheckCircle, Circle } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
    const [activities, setActivities] = useState([
        { id: 1, text: "New food provider added", completed: true },
        { id: 2, text: "Delivery completed successfully", completed: false },
        { id: 3, text: "New user registered", completed: false },
        { id: 4, text: "Food listing updated", completed: true },
    ]);

    const toggleActivity = (id) => {
        setActivities(activities.map(activity =>
            activity.id === id ? { ...activity, completed: !activity.completed } : activity
        ));
    };

    return (
        <div className="p-4 md:p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-semibold text-[#ef9815]">Dashboard</h1>
                    <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening.</p>
                </div>
                <Button className="bg-[#ef9815] text-white hover:bg-orange-600 transition-colors">
                    + Create New Listing
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <Card className="card hover:shadow-md transition-shadow duration-200 border border-gray-100">
                    <CardContent className="flex items-center gap-4 p-4 md:p-6">
                        <div className="p-3 bg-orange-50 rounded-lg">
                            <Users className="text-[#ef9815]" size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Users</p>
                            <p className="text-xl md:text-2xl font-semibold">1,245</p>
                            <p className="text-xs text-green-600 mt-1">+12% from last month</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="card hover:shadow-md transition-shadow duration-200 border border-gray-100">
                    <CardContent className="flex items-center gap-4 p-4 md:p-6">
                        <div className="p-3 bg-orange-50 rounded-lg">
                            <Package className="text-[#ef9815]" size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Food Listings</p>
                            <p className="text-xl md:text-2xl font-semibold">320</p>
                            <p className="text-xs text-green-600 mt-1">+8% from last month</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="card hover:shadow-md transition-shadow duration-200 border border-gray-100">
                    <CardContent className="flex items-center gap-4 p-4 md:p-6">
                        <div className="p-3 bg-orange-50 rounded-lg">
                            <Truck className="text-[#ef9815]" size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Deliveries</p>
                            <p className="text-xl md:text-2xl font-semibold">98</p>
                            <p className="text-xs text-blue-600 mt-1">+24 today</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="card hover:shadow-md transition-shadow duration-200 border border-gray-100">
                    <CardContent className="flex items-center gap-4 p-4 md:p-6">
                        <div className="p-3 bg-orange-50 rounded-lg">
                            <BarChart3 className="text-[#ef9815]" size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Monthly Growth</p>
                            <p className="text-xl md:text-2xl font-semibold text-green-600">+18%</p>
                            <p className="text-xs text-gray-500 mt-1">On track for target</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <Card className="card border border-gray-100">
                <CardContent className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg md:text-xl font-semibold">Recent Activity</h2>
                        <Button variant="ghost" className="text-sm text-[#ef9815] hover:text-orange-600">
                            View All →
                        </Button>
                    </div>
                    <ul className="space-y-3">
                        {activities.map((activity) => (
                            <li
                                key={activity.id}
                                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                onClick={() => toggleActivity(activity.id)}
                            >
                                {activity.completed ? (
                                    <CheckCircle className="text-green-500" size={18} />
                                ) : (
                                    <Circle className="text-gray-300" size={18} />
                                )}
                                <span className={`text-sm ${activity.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                                    {activity.text}
                                </span>
                                <span className="ml-auto text-xs text-gray-400">
                                    {activity.completed ? 'Completed' : 'Pending'}
                                </span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}