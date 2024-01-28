import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col p-10 gap-y-10 items-center">
      <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blogs
      </h1>
      <Skeleton className="w-full aspect-[7/1] animate-pulse[1s]" />
      <Skeleton className="w-full aspect-[7/1] animate-pulse[1s]" />
    </main>
  );
};