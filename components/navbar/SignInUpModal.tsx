import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { SignUpForm } from "../forms/SignUpForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { USER_TYPE } from "@/types/common";
import { SignInForm } from "../forms/SignInForm";
import useSignInUpModal from "@/app/hooks/useSignInUpModal";

const SignInUpModal = () => {
  const { open, setOpen, modalFor } = useSignInUpModal();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" mb-5  ">
            {" "}
            {modalFor === "sign-in"
              ? "Create an account"
              : "Sign In to Github Jobs"}
          </DialogTitle>
          <DialogDescription>
            <Tabs defaultValue="jobseeker">
              <TabsList className="grid w-full grid-cols-2 mb-5">
                <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
                <TabsTrigger value="employer">Employer</TabsTrigger>
              </TabsList>
              <TabsContent value="jobseeker">
                {modalFor == "sign-up" ? (
                  <>
                    <SignUpForm role={USER_TYPE.jobseeker} />
                  </>
                ) : (
                  <SignInForm role={USER_TYPE.jobseeker} />
                )}
              </TabsContent>
              <TabsContent value="employer">
                {modalFor == "sign-up" ? (
                  <SignUpForm role={USER_TYPE.employer} />
                ) : (
                  <SignInForm role={USER_TYPE.employer} />
                )}
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignInUpModal;
