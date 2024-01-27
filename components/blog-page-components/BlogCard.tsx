import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { BlogPostInfo } from "../helper-interfaces"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface BlogCardProps {
  blog: BlogPostInfo
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card id={blog.id} className="flex flex-row w-[100%]">
      <CardHeader className="w-[20%]">
        <CardTitle>
          <AspectRatio ratio={30 / 20} className="bg-muted">
            <Image
              src={blog.image || "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"}
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col p-6 space-y-2 text-left">
        <div>
          <h1 className="font-semibold">{blog.title}</h1>
          <h2 className="text-muted-foreground font-light text-sm">Created on {blog.createdAt} by {blog.author}</h2>
        </div>
        <p>{blog.content}</p>
      </CardContent>
    </Card>
  )
}

export default BlogCard;