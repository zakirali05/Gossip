import { ModeToggle } from "@/components/mode-toggler"

const ChatPage = () => {
  return (
    <div className="h-screen">
      <nav className=" hidden md:flex p-2 w-full border-b  items-center justify-between">
    <h1></h1>
        <div ><ModeToggle/></div>
      </nav>
     <main >
      ChatPage
     </main>
    </div>
  )
}

export default ChatPage