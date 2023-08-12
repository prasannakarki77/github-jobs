import { Dialog } from "@radix-ui/react-dialog";
import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { SignInForm } from "./forms/SignInForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const SignInUpModal = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-center mb-5">
          Sign In to Github Jobs
        </DialogTitle>
        <DialogDescription>
          <Tabs defaultValue="jobseeker">
            <TabsList className="grid w-full grid-cols-2 mb-5">
              <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
              <TabsTrigger value="employer">Employer</TabsTrigger>
            </TabsList>
            <TabsContent value="jobseeker">
              <SignInForm />
            </TabsContent>
            <TabsContent value="employer">
              Change your password here.
            </TabsContent>
          </Tabs>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default SignInUpModal;
