"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../../ui/sidebar";
import { MenuItems } from "../../data";
import { CustomSidebarFooter } from "./CustomSidebarFooter";
import { MAX_WIDTH_SIDEBAR } from "consts";
import { SubscriptionCard } from "../../cards/SubscriptionCard";

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" style={{ maxWidth: MAX_WIDTH_SIDEBAR }}>
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center space-x-2 overflow-hidden">
          <SidebarTrigger className="size-4 flex-shrink-0" />
          <span
            className={`
              text-xl font-semibold text-gray-800
              transition-all duration-700
              whitespace-nowrap
              ${open ? "opacity-100 ml-2 max-w-auto" : "opacity-0 ml-0 max-w-0"}
            `}
          >
            My Food
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {MenuItems.map((item, i) => (
                <SidebarMenuItem key={i}>
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
          className={`overflow-hidden transition-all duration-500 ${
            open
              ? "opacity-100 scale-100 max-h-full"
              : "opacity-0 scale-95 max-h-0"
          }`}
        >
          <SubscriptionCard />
        </SidebarGroup>
      </SidebarContent>
      <CustomSidebarFooter />
    </Sidebar>
  );
}

