"use client";

import * as React from "react";
import {
    ClipboardList,
    HomeIcon,
    LayoutDashboard,
    PlusCircle,
    SquareChartGantt,
    UserCog,
    UsersRoundIcon,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import Logo from "@/assets/Logo";
import { useUser } from "@/context/UserContext";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { user } = useUser();

    const landlordMenu = [
        {
            title: "Add Rental House",
            url: "/landlord/add-rental-house",
            icon: PlusCircle,
        },
        {
            title: "Manage Rental Houses",
            url: "/landlord/manage-rental-houses",
            icon: SquareChartGantt,
        },
        {
            title: "Rental House Requests",
            url: "/landlord/rental-house-request",
            icon: ClipboardList,
        },
    ];

    const tenantMenu = [
        {
            title: "Rental House Requests",
            url: "/tenant/rental-house-request",
            icon: ClipboardList,
        },
    ];

    const adminMenu = [
        {
            title: "Manage Users",
            url: "/admin/manage-users",
            icon: UsersRoundIcon,
        },
        {
            title: "Manage Rental Houses",
            url: "/admin/manage-rental-houses",
            icon: SquareChartGantt,
        },
    ];

    const data = {
        navMain: [
            {
                title: "Home",
                url: "/",
                icon: HomeIcon,
            },
            {
                title: "Dashboard",
                url: `/${user?.role}`,
                icon: LayoutDashboard,
                isActive: true,
            },
            {
                title: "Profile",
                url: "/profile",
                icon: UserCog,
            },
        ],
    };

    if (user?.role === "landlord") {
        data.navMain.push(...landlordMenu);
    } else if (user?.role === "tenant") {
        data.navMain.push(...tenantMenu);
    } else if (user?.role === "admin") {
        data.navMain.push(...adminMenu);
    }

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <Logo />
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
