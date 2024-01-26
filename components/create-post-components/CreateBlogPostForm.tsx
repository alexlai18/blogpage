"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { PersonIcon } from "@radix-ui/react-icons"

export function CreateBlogPostForm() {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Title</Label>
          <Input id="name" placeholder="Title to your blog post" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Upload Cover Image</Label>
          <Input type="file" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Blog Contents</Label>
          <Textarea placeholder="Type your blog here." />
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <PersonIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Post Anonymously
            </p>
            <p className="text-sm text-muted-foreground">
              Hide your identity from readers 👥
            </p>
          </div>
          <Switch />
        </div>
      </div>
    </form>
  )
}