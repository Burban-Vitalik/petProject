import { cookies } from "next/headers";
import { AppSidebar } from "./components/sections/sidebar/AppSidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import "./globals.css";
import { SIDEBAR_COOKIE_NAME } from "consts";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value === "true";

  return (
    <html lang="en">
      <body>
        <SidebarProvider defaultOpen={defaultOpen}>
          <div className="flex w-full min-h-screen">
            <AppSidebar />
            <div className="flex-1 flex flex-col">{children}</div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

