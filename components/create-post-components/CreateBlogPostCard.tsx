import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreateBlogPostForm } from "./CreateBlogPostForm"

export function CreateBlogPostCard() {
  return (
    <Card className="w-[70%]">
      <CardHeader>
        <CardTitle>Write a blog post</CardTitle>
        <div className="flex flex-row gap-1 items-baseline">
          <CardDescription>
            Write about anything you want!
          </CardDescription>
          <div className="text-xs text-muted-foreground">&#40;Even if it's innappropriate 🤫&#41;</div>
        </div>
      </CardHeader>
      <CardContent>
        <CreateBlogPostForm />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset</Button>
        <Button>Post</Button>
      </CardFooter>
    </Card>
  )
}