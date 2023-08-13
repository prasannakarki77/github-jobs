import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { SignUpForm } from "./forms/SignUpForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { USER_TYPE } from "@/types/common";

const SignInUpModal = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className=" mb-5">Sign In to Github Jobs</DialogTitle>
        <DialogDescription>
          <Tabs defaultValue="jobseeker">
            <TabsList className="grid w-full grid-cols-2 mb-5">
              <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
              <TabsTrigger value="employer">Employer</TabsTrigger>
            </TabsList>
            <TabsContent value="jobseeker">
              <SignUpForm role={USER_TYPE.jobseeker} />
            </TabsContent>
            <TabsContent value="employer">
              <SignUpForm role={USER_TYPE.employer} />
            </TabsContent>
          </Tabs>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

export default SignInUpModal;
