
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import {  Menu, Settings, User, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton, currentUser } from "@clerk/nextjs";
import { Separator } from "./ui/separator";




const SideBar = async () => {
 const user = await currentUser()
  return (
    <div suppressHydrationWarning>
        <aside
        className="w-[300px] fixed left-0 top-0 border-r-2 border-secondary hidden md:block
          h-full"
      >
        <div
          className="py-2 px-4 flex flex-col 
        h-full justify-between"
        >
          <div className="logo">
            <h2 className="font-bold text-lg">Gossip.</h2>
          </div>
          <div
            className="flex flex-col gap-3 justify-start h-[70%]
          overflow-auto
          "
          >
            <div
              className="one flex gap-3 items-center 
              cursor-pointer
              transition
              hover:text-emerald-500
              "
            >
              <UserPlus
                className="
             
              h-5 w-5"
              />
              Invite
            </div>
            <div
              className="two
              flex gap-3 items-center
              cursor-pointer
              transition
              hover:text-emerald-500
    
              "
            >
              <User className="h-5 w-5" />
              Requests
            </div>
            <div
              className="three
              flex gap-3 items-center
              cursor-pointer
              transition
              hover:text-emerald-500
              "
            >
              <Settings className="h-5 w-5" />
              Settings
            </div>
            <Separator className=" w-full my-2" />
            <div>
            <p className="text-sm text-muted-foreground">Invite user to start chatting</p>

            </div>
          </div>
    
          <div
            className="
          justify-end
          
          "
          >
            <div
              className="w-full
              flex gap-3
              items-center
    
              "
            >
              <UserButton />
              <p className="text-sm text-primary font-medium">
                {user?.emailAddresses[0].emailAddress}
                
              </p>
            </div>
          </div>
        </div>
      </aside>
    <Sheet >
        <SheetTrigger className="block md:hidden m-3">
           <Menu />
        </SheetTrigger>
        <SheetContent side={'left'}>
           
        <aside
        className=" border-secondary 
          h-full"
      >
        <div
          className=" flex flex-col 
        h-full justify-between"
        >
          <div className="logo">
            <h2 className="font-bold text-lg">Gossip.</h2>
          </div>
          <div
            className="flex flex-col gap-3 justify-start h-[70%]
          overflow-auto
          "
          >
            <div
              className="one flex gap-3 items-center 
              cursor-pointer
              transition
              hover:text-emerald-500
              "
            >
              <UserPlus
                className="
             
              h-5 w-5"
              />
              Invite
            </div>
            <div
              className="two
              flex gap-3 items-center
              cursor-pointer
              transition
              hover:text-emerald-500
    
              "
            >
              <User className="h-5 w-5" />
              Requests
            </div>
            <div
              className="three
              flex gap-3 items-center
              cursor-pointer
              transition
              hover:text-emerald-500
              "
            >
              <Settings className="h-5 w-5" />
              Settings
            </div>
            <Separator className=" w-full my-2" />
            <div>
              <p className="text-sm text-muted-foreground">Invite user to start chatting</p>
            </div>
          </div>
    
          <div
            className="
          justify-end
          
          "
          >
            <div
              className="w-full
              flex gap-3
              items-center
    
              "
            >
              <UserButton />
              <p className="text-sm text-primary font-medium">
                {user?.emailAddresses[0].emailAddress}
                
              </p>
            </div>
          </div>
        </div>
      </aside>
  
         
        </SheetContent>
    </Sheet>
    </div>
  );
};

export default SideBar;
