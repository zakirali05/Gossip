import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const profileImg =
    "https://avatars.githubusercontent.com/u/109236535?s=400&u=4e86c15b051226606a27a832c48b56b439804b3a&v=4";

  return (
    <div className="flex items-center justify-between    px-5 py-2  border-t border-secondary absolute bottom-0 w-full">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={profileImg} />
          <AvatarFallback>ZK</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h2 className="text-primary text-xs font-semibold">ZakirAli</h2>
          <p className="text-xs text-muted-foreground">creator</p>
        </div>
      </div>
      <TooltipProvider>
        <Tooltip delayDuration={10} >
          <TooltipTrigger>
            <Button size="sm" variant="secondary">
              <MessageSquare />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat with the creator</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Footer;
