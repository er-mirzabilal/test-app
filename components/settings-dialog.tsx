"use client";

import * as React from "react";
import {
  Bell,
  Check,
  Globe,
  Home,
  Keyboard,
  Link,
  Lock,
  Menu,
  MessageCircle,
  Paintbrush,
  Settings,
  Video,
  SquareUserRound,
  ScrollText,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import AuditLogPage from "./audit-log";

const data = {
  nav: [
    { name: "Notifications", icon: Bell, slug: "notifications" },
    { name: "Connected accounts", icon: Link, slug: "connected-accounts" },
    { name: "Account", icon: SquareUserRound, slug: "account" },
    { name: "Audit log", icon: ScrollText, slug: "audit-log" },
  ],
};

export function SettingsDialog() {
  const [open, setOpen] = React.useState(true);
  const [selectedMenu, setSelectedMenu] = React.useState("notifications");

  const renderContent = () => {
    switch (selectedMenu) {
      case "notifications":
        return <div>Notification Settings</div>;
      case "connected-accounts":
        return <div>Connected Accounts Settings</div>;
      case "account":
        return <div>Account Settings</div>;
      case "audit-log":
        return <AuditLogPage />;
      default:
        return <div>Select a setting f rom the menu</div>;
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 md:max-h-[600px] md:max-w-[700px] lg:max-w-[1000px]">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.slug}>
                        <SidebarMenuButton
                          asChild
                          isActive={selectedMenu === item.slug}
                          onClick={() => setSelectedMenu(item.slug)}
                        >
                          <a href="#">
                            <item.icon />
                            <span>{item.name}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <div className="p-4">{renderContent()}</div>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}
