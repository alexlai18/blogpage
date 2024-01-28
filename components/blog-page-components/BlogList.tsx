
"use client"
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'
import BlogCard from "./BlogCard";
import { BlogPostInfo } from "../helper-interfaces";

interface BlogCardProps {
  blogs: BlogPostInfo[]
}

const BlogList: React.FC<BlogCardProps> = ({ blogs }) => {
  const router = useRouter();
  const blogPosts = blogs;

  return (
    <div className="flex flex-col w-full justify-center items-center">
      {blogPosts.length === 0 &&
        <div className="flex flex-col h-full mt-40 gap-4 text-center">
          <h1 className="text-3xl font-extrabold mb-6">There are no blog posts 😔</h1>
          <h3 className="text-xl font-extrabold mb-6">Help us out by creating a blog post.</h3>
          <Button id="redirect-create-blog" onClick={() => router.push('/createpost')}>Create Blog Post</Button>
        </div>
      }
      {
        blogPosts.length > 0 &&
        blogPosts.map((blog) => {
          return (
            <button key={blog._id} id={blog._id} className="w-full" onClick={() => router.push(`/blogs/${blog._id}`)}>
              <BlogCard blog={blog} />
            </button>
          )
        })
      }
    </div>
  );
}

export default BlogList