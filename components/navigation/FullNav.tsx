"use client"
import ThemeButton from "../theme/ThemeButton"
import MainNav  from "./MainNav"
import SearchBar from "./SearchBar"
import AuthButton from "./AuthButton"
import { useSession } from "next-auth/react"

const FullNav = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex flex-col h-32 sm:flex-row sm:h-16 justify-between p-4">
          <MainNav className="mx-6" status={status} />
          <div className="flex items-center space-x-4">
            <SearchBar />
            <ThemeButton />
            <AuthButton status={status} />
            {status === "authenticated"
                &&
                <div className="flex flex-row items-center space-x-4 align-middle">
                  <img
                    src={session?.user?.image || "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"}
                    className="w-full max-w-[35px] h-auto"
                    alt="User Image"
                  />
                  <div className="text-center">
                    {session?.user?.name}
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-32 justify-between px-4 space-y-4 flex-col sm:flex-row sm:h-16 sm:space-y-0">
          <MainNav className="mx-6" status={status} />
          <div className="flex items-center space-x-4">
            <SearchBar />
            <ThemeButton />
            <AuthButton status={status} />
            {status === "authenticated"
                &&
                (
                  <img
                    src={session?.user?.image || "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"}
                    className="w-full max-w-[35px] h-auto"
                    alt="User Image"
                  />
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullNav;