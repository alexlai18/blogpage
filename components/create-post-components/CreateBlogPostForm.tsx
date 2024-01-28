"use client"
import React, { ChangeEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { PersonIcon, ReloadIcon } from "@radix-ui/react-icons"
import { CardContent, CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import { createPost } from "@/lib/apiClient"
import { useRouter } from "next/navigation"

interface PostForm {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateBlogPostForm: React.FC<PostForm> = ({ setError }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);


  const handleCreatePost = async () => {
    if (title !== "" && summary !== "" && content !== "") {
      // Image not needed
      setLoading(true);
      setError(false);
      const author = anonymous ? "Anonymous" : "User";
      const newPost = await createPost({title, summary, content, author, image});
      setLoading(false);
      router.push(`/blogs/${newPost._id}`)
    } else {
      setError(true);
    }
    console.log(title, summary, content, anonymous, image);
  }

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImage = e.target.files[0];
      if (selectedImage && selectedImage.type === 'image/png') {
        setImage(selectedImage);
      }
    }
  };

  const handleResetVals = () => {
    setTitle("");
    setSummary("");
    setContent("");
    setAnonymous(false);
    setImage(null);
  }

  return (
    <>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Title</Label>
            <Input id="title" placeholder="Title to your blog post" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Upload Cover Image</Label>
            <Input type="file" accept=".png" onChange={onChangeImage}/>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Summary</Label>
            <Input id="summary" placeholder="Summary to your blog post" value={summary} onChange={(e) => setSummary(e.target.value)} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Blog Contents</Label>
            <Textarea id="content" placeholder="Type your blog here." value={content} onChange={(e) => setContent(e.target.value)} />
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
            <Switch
              checked={anonymous}
              onCheckedChange={() => setAnonymous(!anonymous)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleResetVals} variant="outline">Reset</Button>
        <Button
          onClick={handleCreatePost}
          disabled={loading}
        >
          {loading &&
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          } Post
        </Button>
      </CardFooter>
    </>
  )
}

export default CreateBlogPostForm;