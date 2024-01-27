import BlogList from "@/components/blog-page-components/BlogList";

export default function Blogs() {
  return (
    <main className="flex flex-col p-10 gap-y-10 items-center">
      <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blogs
      </h1>
      <BlogList />
    </main>
  );
}
