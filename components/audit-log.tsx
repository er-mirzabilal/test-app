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
  ChevronDown
} from "lucide-react";
import { saveAs } from "file-saver";

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
import { Header } from "./custom-breadcrumb";
import { cn } from "@/lib/utils";

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
  const [selectedDateFilter, setSelectedDateFilter] = React.useState("All");
  const [selectedUserFilter, setSelectedUserFilter] = React.useState("All users");
  const [selectedEventFilter, setSelectedEventFilter] = React.useState("All events");
  const [dropdownOpen, setDropdownOpen] = React.useState({
    date: false,
    user: false,
    event: false,
  });
  const filteredLogs = auditLogs.filter((log) => {
    const matchesDate =
      selectedDateFilter === "All" ||
      log.timestamp.includes(selectedDateFilter);
    const matchesUser =
      selectedUserFilter === "All users" ||
      log.user.name.includes(selectedUserFilter);
    const matchesEvent =
      selectedEventFilter === "All events" ||
      log.action === selectedEventFilter;

    return matchesDate && matchesUser && matchesEvent;
  });

  const handleExportCSV = () => {
    const csvContent = [
      ["User Name", "Email", "Action", "Target", "Timestamp"].join(","),
      ...filteredLogs.map((log) =>
        [
          log.user.name,
          log.user.email,
          log.action,
          log.target,
          log.timestamp,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "audit_log.csv");
  };
  const handleDropdownOpenChange = (type: string, isOpen: any) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [type]: isOpen,
    }));
  };

  return (
    <>
      <Header text="Messages & media" />
      <div className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-6">Messages & media</h2>
        <div className="h-px bg-border mb-6"></div>
        <div className="flex items-center gap-2 mb-6">
          <DropdownMenu open={dropdownOpen.date} onOpenChange={(isOpen) => handleDropdownOpenChange("date", isOpen)}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-2xl">
                <Calendar className="mr-1 h-4 w-4" />
                {selectedDateFilter === "All" ? "Date" : selectedDateFilter}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", dropdownOpen.date && "rotate-180")} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setSelectedDateFilter("All")}>All dates</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedDateFilter("Last 24 hours")}>Last 24 hours</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedDateFilter("Last 7 days")}>Last 7 days</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedDateFilter("Last 30 days")}>Last 30 days</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu open={dropdownOpen.user} onOpenChange={(isOpen) => handleDropdownOpenChange("user", isOpen)}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-2xl">
                <Users className="mr-1 h-4 w-4" />
                {selectedUserFilter === "All users" ? "User" : selectedUserFilter}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", dropdownOpen.user && "rotate-180")} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setSelectedUserFilter("All users")}>All users</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedUserFilter("Albert Flores")}>Albert Flores</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedUserFilter("Kristin Watson")}>Kristin Watson</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu open={dropdownOpen.event} onOpenChange={(isOpen) => handleDropdownOpenChange("event", isOpen)}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-2xl">
                <Settings className="mr-1 h-4 w-4" />
                {selectedEventFilter === "All events" ? "Event" : selectedEventFilter}
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", dropdownOpen.event && "rotate-180")} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setSelectedEventFilter("All events")}>All events</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedEventFilter("Edited")}>Edits</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedEventFilter("Viewed")}>Views</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedEventFilter("Downloaded")}>Downloads</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="ml-auto">
            <Button size="sm" onClick={handleExportCSV}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="rounded-lg max-h-[360px] overflow-y-auto">
          {filteredLogs.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">User</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={log.user.avatar} alt={log.user.name} />
                          <AvatarFallback>{log.user.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                          <div className="font-medium">{log.user.name}</div>
                          <div className="text-xs text-muted-foreground">{log.user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {log.action} {log.icon} {log.target}
                      </div>
                    </TableCell>
                    <TableCell className="text-right tabular-nums">{log.timestamp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <h2 className="text-xl font-semibold mb-6 text-center pt-6">No messages & media found</h2>
          )}
        </div>
      </div>
    </>
  );
}