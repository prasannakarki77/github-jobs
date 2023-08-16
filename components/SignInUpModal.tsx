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
import { SignInForm } from "./forms/SignInForm";

interface Props {
  modalFor: "sign-in" | "sign-up";
}

const SignInUpModal: React.FC<Props> = ({ modalFor }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className=" mb-5">{`Sign ${
          modalFor === "sign-in" ? "In" : "Up"
        }  to Github Jobs`}</DialogTitle>
        <DialogDescription>
          <Tabs defaultValue="jobseeker">
            <TabsList className="grid w-full grid-cols-2 mb-5">
              <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
              <TabsTrigger value="employer">Employer</TabsTrigger>
            </TabsList>
            <TabsContent value="jobseeker">
              {modalFor == "sign-up" ? (
                <SignUpForm role={USER_TYPE.jobseeker} />
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
  );
};

export default SignInUpModal;
