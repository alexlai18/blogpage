interface BlogContentProps {
  content: string,
}

const BlogPostContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <h1>{content}</h1>
  );
}

export default BlogPostContent;