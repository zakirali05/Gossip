
import { ModeToggle } from "@/components/mode-toggler"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
const ChatPage = () => {

  return (
    <div className="h-[100%]">
      <nav className=" hidden md:flex p-2 w-full border-b  items-center justify-between">
    <h1></h1>
        <div ><ModeToggle/></div>
      </nav>
      <div className="flex flex-col  h-[90%]  items-center justify-center w-full">
        <Image
        src={`/empty.png`}
        alt="empty"
        width={300}
        height={300}
        className="dark:hidden"
        />
         <Image
        src={`/empty-dark.png`}
        alt="empty"
        width={300}
        height={300}
        className="hidden dark:block"
        />
      <h1 className="text-2xl font-bold italic  text-center">Select any of your friend to start the conversation!</h1>
      </div>
    </div>
  )
}

export default ChatPage