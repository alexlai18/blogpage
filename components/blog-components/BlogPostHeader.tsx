interface BlogBannerProps {
  title: string,
  author: string,
  createdAt: string
}

const BlogPostHeader: React.FC<BlogBannerProps> = ({ title, author, createdAt }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-extrabold mb-6">{title}</h1>
      <p className="text-muted-foreground font-semibold">Created on/Last edited on {createdAt}</p>
      <h3>By {author}</h3>
    </div>
  );
}

export default BlogPostHeader;