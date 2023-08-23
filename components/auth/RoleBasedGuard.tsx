import getCurrentUser from "@/app/actions/getCurrentUser";
import { UserRole } from "@prisma/client";
import Forbidden403 from "../Forbidden403";
import AuthGuard from "./AuthGuard";
import ClientOnly from "../ClientOnly";

interface RoleBasedGuardProps {
  children: React.ReactNode;
  role: UserRole;
}

const RoleBasedGuard = async ({ children, role }: RoleBasedGuardProps) => {
  const currentUser = await getCurrentUser();

  if (currentUser && currentUser.role !== role)
    return (
      <ClientOnly>
        <Forbidden403 hideSignIn />
      </ClientOnly>
    );

  return <AuthGuard>{children}</AuthGuard>;
};
export default RoleBasedGuard;
