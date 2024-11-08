import { Switch } from "@/components/ui/switch"
import { Header } from "./custom-breadcrumb"

const securityAlerts = [
    {
      id: 1,
      title: "Disable public page sharing",
      description: "Disable the Share to web option in the Share menu on every page in this workspace.",
    
    },
    {
      id: 2,
      title: "Disable guests",
      description: "Prevent anyone from inviting people outside the workspace to pages.",
   
    },
    {
      id: 3,
      title: "Disable duplicating pages to other workspaces",
      description: "Prevent anyone from duplicating pages to other workspaces via the Move To or Duplicate To actions.",
     
    },
    {
      id: 4,
      title: "Disable export",
      description: "Prevent anyone from exporting as Markdown, CSV, or PDF.",
  
    },
  ]

export default function Notifications() {
    return (
        <>
        <Header text="Account Security" />
        <div className="w-full max-w-2xl bg-background p-6">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="h-px bg-border mb-6"></div>

            <div className="space-y-6">
                {securityAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start justify-between">
                        <div className="w-[80%]">
                            <h3 className="text-sm font-medium">{alert.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                {alert.description}
                            </p>
                        </div>
                        <div className="self-center">
                            <Switch />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
        
    )
}