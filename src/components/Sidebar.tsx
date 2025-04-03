import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from 'lucide-react'
import Link from "next/link";

export default function Sidebar() {
    return (
        <Command className="bg-secondary">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList >
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">

                    {/* similarly all */}


                    <CommandItem className="p-2 ml-2">
                        <LayoutDashboard className="mr-2 h-4 w-4"/>
                        <Link href='/'>Dashboard</Link>
                    </CommandItem>


                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>Profile</CommandItem>
                    <CommandItem>Billing</CommandItem>
                    <CommandItem>Settings</CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>


    );
}

Sidebar