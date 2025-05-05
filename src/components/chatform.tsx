"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";


import { Input } from "@/components/ui/input";

const formSchema = z.object({
  query: z.string()
//   .min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
})



interface ChatFormProps {
  onData: (data: z.infer<typeof formSchema>) => void;
}

export function ChatForm({ onData }: ChatFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          query: "",
        },
      })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        form.reset();
        onData(values);
    }

   
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Hi! What can I do for you?" {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    )
  }