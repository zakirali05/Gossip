
import MessageForm from "@/components/message-form"
import { ModeToggle } from "@/components/mode-toggler"

const ChatPage = () => {



  return (
    <div className="h-full">
      <nav className=" hidden md:flex p-2 w-full border-b  items-center justify-between">
    <h1>Username</h1>
        <div ><ModeToggle/></div>
      </nav>
     <main className="h-[91%] w-full relative bg-slate-200 dark:bg-slate-900" >
      <div className="w-full h-full"></div>
     <div className="absolute bottom-[20px] w-full px-8"><MessageForm/></div>
     </main>
    </div>
  )
}

export default ChatPage