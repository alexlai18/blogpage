import { ThemeButton } from "../theme/ThemeButton"
import { MainNav } from "./MainNav"
import { SearchBar } from "./SearchBar"


export function FullNav({}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-32 justify-center px-4 space-y-4 flex-col align-middle sm:flex-row sm:h-16 sm:space-y-0">
          <MainNav className="mx-6" />
          <div className="ml-4 sm:ml-auto flex items-center space-x-4">
            <SearchBar />
            <ThemeButton />
          </div>
        </div>
      </div>
    </div>
  )
}