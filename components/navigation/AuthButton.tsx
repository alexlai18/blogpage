"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react"

interface AuthButtonProps {
  status: string
}
const AuthButton: React.FC<AuthButtonProps> = ({ status }) => {
  return (
    <>
      {status !== "authenticated"
        ?
          <Dialog>
            <DialogTrigger asChild>
              <Button>Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Login or Register an Account</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-y-4 items-center justify-center">
                <div>
                  Log in to comment on and post blogs
                </div>
                <div>
                  Join the community 🎉
                </div>
              </div>
              <DialogFooter className="flex flex-col sm:justify-center">
                <button
                  onClick={()  => signIn('google')}
                  className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
                >
                  <Image alt="google-logo" src="/google-logo.png" height={30} width={30} />
                  <span className="bg-blue-500 text-white px-4 py-3">
                    Sign in with Google
                  </span>
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        :
          <Dialog>
            <DialogTrigger asChild>
              <Button>Logout</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Log out of your account</DialogTitle>
                <DialogDescription>
                  Are you sure?
                </DialogDescription>
              </DialogHeader>
      
              <DialogFooter className="flex flex-col sm:justify-center">
                <Button onClick={() => signOut()}>Sign out</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
      }
    </>
  )
}

export default AuthButton;