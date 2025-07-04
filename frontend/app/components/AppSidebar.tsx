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
} from "./ui/sidebar";
import { MenuItems } from "./data";
import { CustomSidebarFooter } from "./sections/sidebar/CustomSidebarFooter";
import { MAX_WIDTH_SIDEBAR } from "consts";

export function AppSidebar() {
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
      </SidebarContent>
      <CustomSidebarFooter />
    </Sidebar>
  );
}

