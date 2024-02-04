'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  status: string;
}

const MainNav : React.FC<MainNavProps> = ({
  className,
  status,
  ...props
}) => {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={`text-sm font-medium ${pathname === "/" ? "" : "text-muted-foreground"} transition-colors hover:text-primary`}
      >
        Overview
      </Link>
      <Link
        href="/blogs"
        className={`text-sm font-medium ${pathname === "/blogs" ? "" : "text-muted-foreground"} transition-colors hover:text-primary`}
      >
        Blog Posts
      </Link>
      {status === "authenticated" &&
        <>
          <Link
            href="/createpost"
            className={`text-sm font-medium ${pathname === "/createpost" ? "" : "text-muted-foreground"} transition-colors hover:text-primary`}
          >
            Create a Blog Post
          </Link>
          <Link
            href="/settings"
            className={`text-sm font-medium ${pathname === "/settings" ? "" : "text-muted-foreground"} transition-colors hover:text-primary`}
          >
            Settings
          </Link>
        </>
      }
    </nav>
  )
}

export default MainNav;