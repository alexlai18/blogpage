interface BlogContentProps {
  content: string,
}

export default function BlogPostContent ({ content }: BlogContentProps) {
  return (
    <h1>{content}</h1>
  );
}