import { MenuItemCard } from "@/components/cards/MenuItemCard";
import { UserProfile } from "@/components/general/UserProfile";
import {
  Sidebar,
  SidebarGroup,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function HealthyMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="flex flex-1">
      <main className="flex-1 p-6">{children}</main>

      <div className="w-[350px]">
        <Sidebar side="right" className="w-[350px] shrink-0">
          <UserProfile />

          <SidebarGroup className="flex flex-col px-5 gap-4">
            <p>Popular Menu</p>
            {Array.from({ length: 10 }).map((_, i) => (
              <MenuItemCard key={i} />
            ))}
          </SidebarGroup>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}

