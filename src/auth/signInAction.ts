"use server";

import { signIn } from "@/src/auth";

export const handleSignIn = async () => {
  await signIn();
};
