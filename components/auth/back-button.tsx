"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"


export const BackButton = ({href, label} : {href: string, label: string}) => {
    return (
        <div className="flex justify-center font-medium w-full">
            <Button variant={"link"} className="w-full">
                <Link aria-label={label} href={href}>{label}</Link>
            </Button>
        </div>
    )
}