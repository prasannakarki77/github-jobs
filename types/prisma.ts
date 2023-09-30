import { Posting, User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt?: string;
  emailVerified: string | null;
};

export type SafePost = Omit<Posting, "expiresAt" | "createdAt" | "user"> & {
  createdAt: string;
  expiresAt?: string;
  user: User;
};

export type SafeUserPosts = Omit<
  Posting,
  "expiresAt" | "createdAt" | "user"
> & {
  createdAt: string;
  expiresAt?: string;
};
