import RoleBasedGuard from "@/components/auth/RoleBasedGuard";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RoleBasedGuard role="EMPLOYER">{children}</RoleBasedGuard>;
}
