"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios, { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { GithubIcon, Loader2 } from "lucide-react";
import { USER_TYPE, UserType } from "@/types/common";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { signIn } from "next-auth/react";
const formSchema = z
  .object({
    name: z.string().min(3, {
      message: "Company Name must be at least 3 characters",
    }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirm_password: z.string().min(1, {
      message: "Confirm Password is required",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Password don't match",
  });

interface SignUpFormProps {
  role: UserType;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ role }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const { toast } = useToast();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await axios.post("/api/register", data);
      toast({
        variant: "default",
        title: "Registration Successful",
        description: "You can now sign in to GitHub jobs.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.response.data.message ?? "Registration Failed",
        description: "Please try again!",
      });
    }
  };

  if (role == USER_TYPE.jobseeker) {
    return (
      <Button
        className="w-full"
        variant="default"
        size="lg"
        onClick={() => signIn("github")}
      >
        <GithubIcon className="  h-4 w-4 mr-1" /> Sign in with github
      </Button>
    );
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

{
  /* <div className="relative my-7">
<div className="absolute inset-0 flex items-center">
  <span className="w-full border-t" />
</div>
<div className="relative flex justify-center text-xs uppercase">
  <span className="bg-background px-2 text-muted-foreground">
    Or continue with
  </span>
</div>
</div> */
}
