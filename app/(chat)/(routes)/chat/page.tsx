
import { UserButton } from "@clerk/nextjs"
const ChatPage = () => {

  return (
    <div><UserButton afterSignOutUrl="/"/></div>
  )
}

export default ChatPage