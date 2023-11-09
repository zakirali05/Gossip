import Link from "next/link";
import { ModeToggle } from "./mode-toggler";
import { Button } from "./ui/button";
import {BsGithub} from "react-icons/bs"

const Header = () => {
const githubLink = "https://github.com/zakirali05/Gossip"

  return <nav className="px-5 py-2  border-b-2 border-secondary">
    <div className="flex items-center justify-between">
        <div className="logo">
            <h1 className="font-bold text-lg">Gossip.</h1>
        </div>
        <div className="flex items-center gap-2">
            <ModeToggle/>
            <Button size='sm' variant="ghost">
            <a href={githubLink} target="blank">
            <BsGithub className="h-5 w-5"/>
            </a>
            </Button>
            <Button size="sm" variant="secondary">
                <Link href="/login">
                Sign up
                </Link>
            </Button>
        </div>
        
    </div>
  </nav>;
};

export default Header;
