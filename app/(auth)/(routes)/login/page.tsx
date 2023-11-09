import LoginForm from "@/components/login-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link"  

const LoginPage = () => {
  return (
    <div>
      <Card className="min-w-[350px]">
        <CardHeader className="gap-1">
          <CardTitle>Login your account</CardTitle>
          <CardDescription>Your friends are waiting for you...</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm/>
        </CardContent>
        <CardFooter >
          <p className="text-sm text-muted-foreground">Dont have an account? <Link href="/register" className="text-blue-500 underline">Create</Link></p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage