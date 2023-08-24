"use client";
import { SessionProvider } from "next-auth/react";
import ClientOnly from "./ClientOnly";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientOnly>
      <SessionProvider>{children}</SessionProvider>
    </ClientOnly>
  );
};
export default Provider;
