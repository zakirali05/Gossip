"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
const InviteForm = () => {
  const {toast} = useToast()
    const formSchema = z.object({
        emailaddress: z.string()
      
      });
    
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          emailaddress: "",
        
        },
      });
    
      const isLoading = form.formState.isSubmitting
      const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        toast({
          description : "invitation sent succesfully",
          
        })
        
      };
    
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2 w-full md:w-[60%]" >
    <FormField
              control={form.control}
              
              name="emailaddress"
              render={({ field }) => (
                <FormItem className="w-[100%] ">
                  {/* <FormLabel>Type Your Message here</FormLabel> */}
                  <FormControl>
                    <Input disabled={isLoading}
                    className="w-full border-2 py-5 "   placeholder="Enter the emailaddress" {...field} />
                  </FormControl>
             
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
    
  
    
            <Button disabled={isLoading}   type="submit"   className="bg-emerald-600 text-white" variant="outline">Invite</Button>
    </form>
    
  
        </Form>
  )
}

export default InviteForm