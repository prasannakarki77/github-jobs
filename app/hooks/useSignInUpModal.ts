import { SignInUpModalType } from "@/types/common";
import { Dispatch, SetStateAction } from "react";
import { create } from "zustand";

interface SignInUpModalStore {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalFor: "sign-in" | "sign-up";
  setModalFor: (name: SignInUpModalType) => void;
}

const useSignInUpModal = create<SignInUpModalStore>((set) => ({
  open: false,
  setOpen: (newOpenState) => set({ open: newOpenState as boolean }),
  modalFor: "sign-in",
  setModalFor: (name) => set({ modalFor: name }),
}));

export default useSignInUpModal;
