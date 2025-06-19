import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Guest = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-extrabold mb-2">Welcome</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Please sign in to manage your to-do list! 🙂
      </p>
      <SignInButton mode="modal">
        <Button>Sign In</Button>
      </SignInButton>
    </section>
  );
};

export default Guest;
