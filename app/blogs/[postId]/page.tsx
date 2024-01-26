export default function Blogs({ params }: {params: { postId: string }}) {
  const { postId } = params;
  return (
    <main className="flex flex-col justify-between p-10 gap-y-10">
      <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blog with id {postId}
      </h1>
    </main>
  );
}
