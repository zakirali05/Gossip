import Link from "next/link";
import { ModeToggle } from "./mode-toggler";
import { Button } from "./ui/button";
import { BsGithub } from "react-icons/bs";
import { UserButton, currentUser } from "@clerk/nextjs";

const Header = async () => {
  const githubLink = "https://github.com/zakirali05/Gossip";
  const user = await currentUser();

  return (
    <nav className="px-5 py-2  border-b border-secondary">
      <div className="flex items-center justify-between">
        <div className="logo">
          <h1 className="font-bold text-lg">Gossip.</h1>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button size="sm" variant="ghost">
            <a href={githubLink} target="blank">
              <BsGithub className="h-5 w-5" />
            </a>
          </Button>
          {user ? (
            <UserButton afterSignOutUrl="/" />
         
          ) : (
            <Button size="sm" variant="secondary">
              <Link href="/login">Sign up</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
