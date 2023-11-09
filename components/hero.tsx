import Link from "next/link"
import { Button } from "./ui/button"
import {MoveRight} from "lucide-react"
import {BsDiscord} from "react-icons/bs"

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-full ">
        <div className="max-w-2xl h-[calc(100vh-200px)]   flex flex-col items-center justify-center gap-4 px-8 py-5 mt-5">
            <h2 className=" text-primary text-3xl  md:text-4xl text-center font-semibold ">Welcome to the most advance chatting app on web, explore your friends !</h2>
            <p className="text-sm md:text-md text-muted-foreground text-center">
                Get along with your friends from all across the web and share gossips for free . Join now and get free acces to all of gossip&apos;s features. Click on join now to immediatly join our community.
            </p>
            <div className="buttons flex items-center gap-5">
            <Button variant="secondary">
              Join our Discord
              <BsDiscord className="w-5 h-5 ml-2"/>
            </Button>
            <Button>
                <Link href="/login">
                Join Now
                </Link>
                <MoveRight className="h-4 w-4 ml-2" />
            </Button>
           
        </div>
        </div>
       
    </div>
  )
}

export default Hero