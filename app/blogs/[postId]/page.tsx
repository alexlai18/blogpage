import BlogPostBanner from "@/components/blog-components/BlogPostBanner";
import BlogPostContent from "@/components/blog-components/BlogPostContent";
import BlogPostHeader from "@/components/blog-components/BlogPostHeader";
import { Button } from "@/components/ui/button";
import { getPostById } from "@/lib/apiClient";

export default async function Blogs({ params }: {params: { postId: string }}) {
  const { postId } = params;
  const blogInfo = await getPostById(postId);

  return (
    <main className="flex flex-col justify-between p-10 gap-y-6">
      <div>
        <BlogPostHeader title={blogInfo.title} author={blogInfo.author} createdAt={blogInfo.createdAt} />
        <div className="flex justify-end">
          <Button>Edit</Button>
        </div>
      </div>
      <BlogPostBanner imgUrl={blogInfo.image || "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"} />
      <BlogPostContent content={blogInfo.content} />
    </main>
  );
}
