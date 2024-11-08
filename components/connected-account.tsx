import { ShieldCheck, MoreHorizontal } from "lucide-react"
import { Badge } from "./ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Header } from "./custom-breadcrumb";

const integrations = [

    {
        id: 2,
        name: "GitHub",
        icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        verified: true,
        badges: ["LINK PREVIEW", "SYNC"],
        users: "Anyone in Acme Inc.",
    },
    {
        id: 3,
        name: "Slack",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
        verified: true,
        badges: ["LINK PREVIEW"],
        users: "Anyone in Acme Inc.",
    },
    {
        id: 4,
        name: "Figma",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        verified: true,
        badges: ["LINK PREVIEW"],
        users: "Anyone in Acme Inc.",
    },
    {
        id: 1,
        name: "Jira",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Jira_Logo.svg",
        verified: true,
        badges: ["LINK PREVIEW", "SYNC"],
        users: "Anyone in Acme Inc.",
    },
];

export default function ConnectedAccount() {
    return (
        <>
            <Header text='Integrations' />
            <div className="w-full max-w-2xl bg-background p-6 flex flex-col h-[600px]">
                <h2 className="text-xl font-semibold">Integrations</h2>
                <div className="h-px bg-border my-6" />

                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="font-medium mb-1">Restrict members from installing integrations</h3>
                        <p className="text-sm text-muted-foreground">
                            Workspace members can install any new integration.
                        </p>
                    </div>
                    <Select defaultValue="off">
                        <SelectTrigger className="w-[80px] border-none px-2 py-1 text-sm font-normal">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="off">Off</SelectItem>
                            <SelectItem value="on">On</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex-1 overflow-hidden flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium">All integrations</h3>
                        <Badge variant="secondary" className="rounded-full">{integrations.length}</Badge>
                    </div>
                    <div className="rounded-lg max-h-[300px] overflow-y-auto ">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Integration</TableHead>
                                    <TableHead>User</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {integrations.map((integration) => (
                                    <TableRow key={integration.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={integration.icon}
                                                    alt={`${integration.name} icon`}
                                                    className="w-10 h-10 rounded"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium">{integration.name}</span>
                                                        <div className="flex gap-2">
                                                            {integration.badges.map((badge) => (
                                                                <Badge
                                                                    key={badge}
                                                                    variant="secondary"
                                                                    className="text-xs font-normal"
                                                                >
                                                                    {badge}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 mt-1">
                                                        <span className="text-sm text-muted-foreground">Notion</span>
                                                        {integration.verified && (
                                                            <ShieldCheck className="w-4 h-4 text-green-500 self-center" />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm text-muted-foreground">
                                                {integration.users}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <button className="text-muted-foreground hover:text-foreground">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div></>

    )
}