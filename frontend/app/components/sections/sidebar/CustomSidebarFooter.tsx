import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MAX_WIDTH_TRIGGER } from "consts";
import { ChevronUp, User2 } from "lucide-react";

const footerItems = [
  {
    title: "Account",
    href: "/",
  },
  {
    title: "Billing",
    href: "/",
  },
  {
    title: "Sign out",
    href: "/",
  },
];

export function CustomSidebarFooter() {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> Vitalik Burban
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{ width: MAX_WIDTH_TRIGGER }}>
              {footerItems.map((item) => (
                <DropdownMenuItem key={item.title}>
                  <span>{item.title}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}

