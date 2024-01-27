
"use client"
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'
import BlogCard from "./BlogCard";
import { BlogPostInfo } from "../helper-interfaces";

const BlogList = () => {
  const router = useRouter()
  const [blogPosts, setBlogPosts] = useState<BlogPostInfo[]>([]);

  useEffect(() => {
    setBlogPosts([
      {
        title: "Fake blog",
        summary: "This is just for the card",
        content: "hello testing 1 2 3, testing 1 2 3",
        author: "Anonymous",
        createdAt: "27-01-2024"
      }
    ]);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {blogPosts.length === 0 &&
        <div className="flex flex-col h-full mt-40 gap-4 text-center">
          <h1 className="text-3xl font-extrabold mb-6">There are no blog posts 😔</h1>
          <h3 className="text-xl font-extrabold mb-6">Help us out by creating a blog post.</h3>
          <Button onClick={() => router.push('/createpost')}>Create Blog Post</Button>
        </div>
      }
      {
        blogPosts.length > 0 &&
        blogPosts.map((blog) => {
          return <BlogCard blog={blog}/>
        })
      }
    </div>
  );
}

export default BlogList