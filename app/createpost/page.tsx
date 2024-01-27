import CreateBlogPostCard from "@/components/create-post-components/CreateBlogPostCard";

export default function Blogs() {
  return (
    <main className="flex flex-col items-center p-10 gap-y-10">
      <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Create a Blog Post
      </h1>
      <CreateBlogPostCard />
    </main>
  );
}
