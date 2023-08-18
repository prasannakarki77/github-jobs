"use client";
import NotFound from "@/app/not-found";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Forbidden403 from "../Forbidden403";

interface AuthGuardProps {
  children: React.ReactNode;
  roleGuard?: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { status } = useSession();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );
  const { push } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
    if (status === "authenticated") {
      setRequestedLocation(null);
    }
  }, [pathname, push, requestedLocation, status]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Forbidden403 />;
  }

  return <>{children}</>;
};

export default AuthGuard;
