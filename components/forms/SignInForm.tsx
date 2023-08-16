"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
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
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import useSignInUpModal from "@/app/hooks/useSignInUpModal";
import { Separator } from "../ui/separator";
const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
interface SignInFormProps {
  role: UserType;
}

export const SignInForm: React.FC<SignInFormProps> = ({ role }) => {
  const { setModalFor, setOpen } = useSignInUpModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const callback = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (callback?.ok) {
        toast({
          variant: "default",
          title: "Logged In",
        });
        router.refresh();
        setOpen(false);
      }
      if (callback?.error) {
        toast({
          variant: "destructive",
          title: callback.error,
          description: "Please try again!",
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Sign In Failed",
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
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
      <div className=" flex items-center justify-center mt-3">
        Don&apos;t have an account ?
        <Button variant={"link"} onClick={() => setModalFor("sign-up")}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};
