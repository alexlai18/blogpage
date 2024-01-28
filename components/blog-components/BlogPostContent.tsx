interface BlogContentProps {
  content: string,
}

const BlogPostContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <p className="whitespace-pre-wrap">{content}</p>
  );
}

export default BlogPostContent;