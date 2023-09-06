"use client";
import { LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types/prisma";
import { getInitials } from "@/lib/utils";
import Link from "next/link";
import { UserRole } from "@prisma/client";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="relative">
          {currentUser?.image ? (
            <AvatarImage src={currentUser?.image} alt="@shadcn" />
          ) : (
            <AvatarFallback>
              {currentUser?.name && getInitials(currentUser?.name)}
            </AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/profile"}>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>{" "}
          </Link>
        </DropdownMenuGroup>
        {currentUser?.role === UserRole.EMPLOYER && (
          <DropdownMenuGroup>
            <Link href="/posts">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Job Postings</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            signOut({ callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
          }
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
