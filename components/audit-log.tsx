"use client";

import * as React from "react";
import {
  Calendar,
  Download,
  Eye,
  FileText,
  Lock,
  Search,
  Settings,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const auditLogs = [
  {
    id: 1,
    user: {
      name: "Albert Flores",
      email: "chambers@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Edited",
    target: "Private page",
    icon: <Lock className="h-4 w-4" />,
    timestamp: "2022/11/05 11:23 PM",
  },
  {
    id: 2,
    user: {
      name: "Kristin Watson",
      email: "jackson.graham@gmail.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Viewed",
    target: "Secret Project Q4",
    icon: <Eye className="h-4 w-4" />,
    timestamp: "2022/11/05 11:22 PM",
  },
  {
    id: 3,
    user: {
      name: "Bessie Cooper",
      email: "deanna.curtis@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Viewed",
    target: "OS",
    icon: <Settings className="h-4 w-4" />,
    timestamp: "2022/11/05 11:21 PM",
  },
  {
    id: 4,
    user: {
      name: "Bessie Cooper",
      email: "deanna.curtis@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Edited",
    target: "OS",
    icon: <Settings className="h-4 w-4" />,
    timestamp: "2022/11/05 11:21 PM",
  },
  {
    id: 5,
    user: {
      name: "Darrell Steward",
      email: "michelle.rivera@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Exported",
    target: "Product Search",
    icon: <Search className="h-4 w-4" />,
    timestamp: "2022/11/05 11:10 PM",
  },
  {
    id: 6,
    user: {
      name: "Cody Fisher",
      email: "michael.mitc@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Downloaded",
    target: "Contract.pdf",
    icon: <FileText className="h-4 w-4" />,
    timestamp: "2022/11/05 11:01 PM",
  },
  {
    id: 7,
    user: {
      name: "Courtney Henry",
      email: "nathan.roberts@acmelabs.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "Added",
    target: "12 members",
    icon: <Users className="h-4 w-4" />,
    timestamp: "2022/11/05 10:43 PM",
  },
];

export default function AuditLogPage() {
  return (
    <main className="flex h-[480px] flex-1 flex-col overflow-hidden p-2">
      <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Settings</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Messages & media</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="container mx-auto py-10 px-4">
        <div className="flex items-center gap-2 mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Date
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Last 24 hours</DropdownMenuItem>
              <DropdownMenuItem>Last 7 days</DropdownMenuItem>
              <DropdownMenuItem>Last 30 days</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Users className="mr-2 h-4 w-4" />
                User
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>All users</DropdownMenuItem>
              <DropdownMenuItem>Active users</DropdownMenuItem>
              <DropdownMenuItem>Inactive users</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Event
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>All events</DropdownMenuItem>
              <DropdownMenuItem>Edits</DropdownMenuItem>
              <DropdownMenuItem>Views</DropdownMenuItem>
              <DropdownMenuItem>Downloads</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="ml-auto">
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        <div className="border rounded-lg max-h-[300px] overflow-y-auto ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">User</TableHead>
                <TableHead>Event</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={log.user.avatar}
                          alt={log.user.name}
                        />
                        <AvatarFallback>
                          {log.user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                        <div className="font-medium">{log.user.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {log.user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {log.action} {log.icon} {log.target}
                    </div>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {log.timestamp}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
