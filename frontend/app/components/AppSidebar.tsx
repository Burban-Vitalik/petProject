"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { MenuItems } from "./data";
import { CustomSidebarFooter } from "./sections/sidebar/CustomSidebarFooter";
import { MAX_WIDTH_SIDEBAR } from "consts";
import { SubscriptionCard } from "./cards/SubscriptionCard";

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" style={{ maxWidth: MAX_WIDTH_SIDEBAR }}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {MenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    className="transition-colors duration-100 hover:bg-lime-300 rounded-md p-4"
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup
          className={`transition-all ${
            open
              ? "opacity-100 scale-100 duration-500"
              : "opacity-0 scale-95 pointer-events-none duration-150"
          }`}
        >
          <SubscriptionCard />
        </SidebarGroup>
      </SidebarContent>
      <CustomSidebarFooter />
    </Sidebar>
  );
}

