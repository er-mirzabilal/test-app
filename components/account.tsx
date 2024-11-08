"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"
import { Header } from "./custom-breadcrumb"

export default function Component() {
    const [image, setImage] = React.useState<string>("/placeholder.svg?height=100&width=100")
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <>
            <Header text="Account" />
            <div className="w-full max-w-2xl bg-background p-6">
                <h2 className="text-xl font-semibold mb-6">My Account</h2>
                <div className="h-px bg-border mb-6"></div>
                <div className="flex items-start gap-6">
                    <div className="relative group" onClick={handleImageClick}>
                        <Avatar
                            className="h-16 w-16 cursor-pointer transition-opacity group-hover:opacity-75"
                        >
                            <AvatarImage src={image} alt="Profile picture" />
                            <AvatarFallback>MB</AvatarFallback>
                        </Avatar>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Camera className="h-6 w-6 text-white" />
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <Label htmlFor="name" className="text-sm text-muted-foreground">
                            Preferred name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Mirza Bilal"
                            className="max-w-sm bg-muted/50 border-0"
                        />
                    </div>
                </div>
            </div>
        </>


    )
}