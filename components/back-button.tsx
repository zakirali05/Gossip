"use client"
import {MoveLeft} from "lucide-react"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter()
  return (
    <Button 
    onClick={()=>router.back()}
    size="icon"
    variant="secondary"
    className="absolute top-[1rem] left-[1rem]">
    <MoveLeft />
    </Button>
  )
}

export default BackButton