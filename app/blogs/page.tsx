import BlogList from "@/components/blog-page-components/BlogList";
import { getAllPosts } from "@/lib/apiClient";

export default async function Blogs() {
  const blogs = await getAllPosts();

  return (
    <main className="flex flex-col p-10 gap-y-10 items-center">
      <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blogs
      </h1>
      <BlogList blogs={blogs}/>
    </main>
  );
}
