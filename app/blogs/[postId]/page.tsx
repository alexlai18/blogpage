import BlogPostBanner from "@/components/blog-components/BlogPostBanner";
import BlogPostContent from "@/components/blog-components/BlogPostContent";
import BlogPostHeader from "@/components/blog-components/BlogPostHeader";

export default function Blogs({ params }: {params: { postId: string }}) {
  const { postId } = params;

  // Do a db operation here to get the information regarding the postName and the imgUrl

  return (
    <main className="flex flex-col justify-between p-10 gap-y-6">
      <BlogPostHeader title={"My First Draft"} author={"Alexander Lai"} createdAt={"27-01-2024"} />
      <BlogPostBanner imgUrl={"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"} />
      <BlogPostContent content={postId} />
    </main>
  );
}
