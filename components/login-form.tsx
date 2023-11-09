"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {FcGoogle} from "react-icons/fc"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "./ui/separator";

const LoginForm = () => {
  const formSchema = z.object({
    emailaddress: z.string().min(2, {
      message: "emailaddress must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "password must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        emailaddress: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

const isLoading = form.formState.isSubmitting
  return (
    <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2" >
<FormField
          control={form.control}
          name="emailaddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>EmailAdress</FormLabel>
              <FormControl>
                <Input disabled={isLoading}   placeholder="Emailaddress" {...field} />
              </FormControl>
         
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input  disabled={isLoading}  placeholder="Password" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading}   type="submit"   className="mt-4" variant="outline">Login</Button>
</form>

<Separator className=" w-full my-4"/>
<Button disabled={isLoading}    className="w-full"><FcGoogle className="h-4 w-4 mr-2"/> Sign in with Google</Button>
    </Form>
  )
};

export default LoginForm;
