"use client";

import { Button } from "@/components/ui/button";
import {
  UserButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-20 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Left side: App title + links */}
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-lg font-bold text-black hover:text-primary transition-colors"
          >
            TaskFlow
          </a>
          <nav className="flex items-center gap-4">
            <a
              href="#list"
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors"
            >
              List
            </a>
            <a
              href="#dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-black transition-colors"
            >
              Dashboard
            </a>
          </nav>
        </div>

        {/* Right side: User menu */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton />
            <SignOutButton>
              <Button variant="default" size="sm">
                Sign Out
              </Button>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="default" size="sm">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
