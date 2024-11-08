"use client"

import { Shield } from "lucide-react"
import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Header } from "./custom-breadcrumb"

// Mock hook to fetch notifications data
const useNotifications = () => {
  // Simulating an API call for fetching data
  const [notificationsData, setNotificationsData] = React.useState([
    {
      id: "public-sharing",
      title: "Disable public page sharing",
      description: "Disable the Share to web option in the Share menu on every page in this workspace.",
    },
    {
      id: "guest-access",
      title: "Disable guests",
      description: "Prevent anyone from inviting people outside the workspace to pages.",
    },
    {
      id: "page-duplication",
      title: "Disable duplicating pages to other workspaces",
      description: "Prevent anyone from duplicating pages to other workspaces via the Move To or Duplicate To actions.",
    },
    {
      id: "export",
      title: "Disable export",
      description: "Prevent anyone from exporting as Markdown, CSV, or PDF.",
    },
  ]);

  // Initial state for toggling notifications
  const [notificationStates, setNotificationStates] = React.useState({
    "public-sharing": true,
    "guest-access": true,
    "page-duplication": false,
    "export": false,
  });

  return { notificationsData, notificationStates, setNotificationStates };
};

export default function Component() {
  const { notificationsData, notificationStates, setNotificationStates } = useNotifications();

  // Function to handle toggling and API call
  const handleToggle = async (id: string) => {
    // Toggle state locally
    setNotificationStates((prev: any) => ({
      ...prev,
      [id]: !prev[id],
    }));

    try {
      // Simulate an API call to update the notification setting
      console.log(`Sending API call to update notification with ID: ${id}`);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay
      console.log(`Notification with ID: ${id} updated successfully`);
    } catch (error) {
      console.error(`Failed to update notification with ID: ${id}`, error);
    }
  };

  return (
    <>
      <Header text="Notifications" />
      <div className="w-full max-w-2xl bg-background p-6">
        <h2 className="text-xl font-semibold mb-6">Notifications</h2>
        <div className="h-px bg-border mb-6"></div>

        <div className="space-y-6">
          {notificationsData.map((notification) => (
            <div key={notification.id} className="flex items-start justify-between space-x-4">
              <div className="space-y-1">
                <Label htmlFor={notification.id}>{notification.title}</Label>
                <CardDescription>
                  {notification.description}
                </CardDescription>
              </div>
              <div className="self-center">
                <Switch
                  id={notification.id}
                  checked={notificationStates[notification.id as keyof typeof notificationStates]}
                  onCheckedChange={() => handleToggle(notification.id)}
                  aria-label={`Toggle ${notification.title.toLowerCase()}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
}
