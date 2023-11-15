"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SendHorizontal } from "lucide-react";
const MessageForm = () => {
    const formSchema = z.object({
        message: z.string()
      
      });
    
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        
        },
      });
    
      const isLoading = form.formState.isSubmitting
      const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
      };
    
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2 w-full" >
    <FormField
              control={form.control}
              
              name="message"
              render={({ field }) => (
                <FormItem className="w-[100%] ">
                  {/* <FormLabel>Type Your Message here</FormLabel> */}
                  <FormControl>
                    <Input disabled={isLoading}
                    className="w-full border-2 py-5 "   placeholder="Type your message..." {...field} />
                  </FormControl>
             
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
    
  
    
            <Button disabled={isLoading}   type="submit"   className="bg-emerald-600 text-white" variant="outline"><SendHorizontal /></Button>
    </form>
    
  
        </Form>
  )
}

export default MessageForm