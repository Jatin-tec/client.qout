import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {
    Command,
    CommandInput,
} from "@/components/ui/command"




const Navbar = () => {
    return (
        <div className="text-3xl font-bold bg-black text-white p-3">
            <div className="flex justify-between">
                Dashboard

                <span className="flex flex-row items-center gap-3">
                    <Command>
                        <CommandInput placeholder="search..." />
                    </Command>
                    <Button>Logout</Button>
                    <Avatar>
                        <AvatarImage src="my-project/app/favicon.ico" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </span>

            </div>

        </div>
    )
}
export default Navbar