"use client"
import React, { useState } from "react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CreateBlogPostForm from "./CreateBlogPostForm";
import ErrorPopup from "../ErrorPopup";
import { useTheme } from "next-themes";

const CreateBlogPostCard = () => {
  const [error, setError] = useState(false);
  const { theme } = useTheme()
  return (
    <Card className="w-[70%]">
      <CardHeader>
        {error &&
          <ErrorPopup
            severity={true}
            message="Please fill out all the inputs in the form below"
            theme={theme}
          />
        }
        <CardTitle>Write a blog post</CardTitle>
        <div className="flex flex-row gap-1 items-baseline">
          <CardDescription>
            Write about anything you want!
          </CardDescription>
          <div className="text-xs text-muted-foreground">&#40;Even if it's innappropriate 🤫&#41;</div>
        </div>
      </CardHeader>
      <CreateBlogPostForm setError={setError}/>
    </Card>
  )
}

export default CreateBlogPostCard;