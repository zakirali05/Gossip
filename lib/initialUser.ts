import { currentUser } from "@clerk/nextjs"
import { db } from "./db"
import { NextResponse } from "next/server"

export const initialUser = async ()=>{
    const user = await currentUser()

    try{
        const UserInDb = await db.user.findUnique({
            where:{
                userId : user?.id
            }
        })

        if(UserInDb){
            return NextResponse.json(UserInDb)
        }

        const newUser = await db.user.create({
            data:{
                userId:user?.id! ,
                profile : user?.imageUrl,
                username :user?.firstName!,
                emailaddress : user?.emailAddresses[0].emailAddress!

            }
        })
        return NextResponse.json(newUser)
    }
    catch(err){
        return NextResponse.json(err)
    }

}

