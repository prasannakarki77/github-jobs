import getCurrentUser from "@/app/actions/getCurrentUser";
import { UserRole } from "@prisma/client";
import Forbidden403 from "../Forbidden403";

interface RoleBasedGuardProps {
  children: React.ReactNode;
  role: UserRole;
}

const RoleBasedGuard = async ({ children, role }: RoleBasedGuardProps) => {
  const currentUser = await getCurrentUser();

  if (currentUser?.role !== role)
    return (
      <>
        <Forbidden403 hideSignIn />
      </>
    );

  return <>{children}</>;
};
export default RoleBasedGuard;
