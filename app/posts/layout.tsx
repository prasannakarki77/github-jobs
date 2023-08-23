import RoleBasedGuard from "@/components/auth/RoleBasedGuard";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
