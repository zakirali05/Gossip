import LoginForm from "@/components/login-form"
import RegisterForm from "@/components/register-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link"  

const RegisterPage = () => {
  return (
    <div>
      <Card className="min-w-[350px]">
        <CardHeader className="gap-1">
          <CardTitle>Register your account</CardTitle>
          <CardDescription>Your friends are waiting for you...</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm/>
        </CardContent>
        <CardFooter >
          <p className="text-sm text-muted-foreground">Already have an account? <Link href="/login" className="text-blue-500 underline">Login</Link></p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RegisterPage