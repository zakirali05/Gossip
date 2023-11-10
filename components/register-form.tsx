"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {SignUpButton , useAuth } from "@clerk/nextjs"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "./ui/separator";

const RegisterForm = () => {
  const formSchema = z.object({
    emailaddress: z.string().min(2, {
      message: "emailaddress must be at least 2 characters.",
    }),
    username: z.string().min(2, {
      message: "username must be at least 2 characters and unique.",
    }),
    password: z.string().min(2, {
      message: "password must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailaddress: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const isLoading = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input disabled={isLoading}   placeholder="Username" {...field} />
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
                <Input disabled={isLoading}   placeholder="Password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button  disabled={isLoading}   type="submit" className="mt-4" variant="outline">
          Register
        </Button>
      </form>

      <Separator className=" w-full my-4" />
<SignUpButton mode="modal">
      <Button disabled={isLoading}   className="w-full">
        <FcGoogle className="h-4 w-4 mr-2" /> Sign up with Google
      </Button>
      </SignUpButton> 
    </Form>
  );
};

export default RegisterForm;
