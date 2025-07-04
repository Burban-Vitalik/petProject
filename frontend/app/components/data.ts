import {
  BikeIcon,
  CalendarDaysIcon,
  ChartNoAxesCombinedIcon,
  HeartPlusIcon,
  LayoutDashboardIcon,
  MessageCircleMoreIcon,
  NotebookTextIcon,
  SoupIcon,
  UtensilsCrossedIcon,
} from "lucide-react";

export const MenuItems: Array<{
  title: string;
  href: string;
  icon: React.ElementType;
}> = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon },
  { title: "Calendar", href: "/calendar", icon: CalendarDaysIcon },
  { title: "Messages", href: "/dashboard", icon: MessageCircleMoreIcon },
  { title: "Healthy Menu", href: "/dashboard", icon: UtensilsCrossedIcon },
  { title: "Meal Plan", href: "/dashboard", icon: SoupIcon },
  { title: "Food Diary", href: "/dashboard", icon: NotebookTextIcon },
  { title: "Progress", href: "/dashboard", icon: ChartNoAxesCombinedIcon },
  { title: "Exercises", href: "/exercises", icon: BikeIcon },
  { title: "Healthy Insights", href: "/dashboard", icon: HeartPlusIcon },
];

