import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col justify-between p-10 gap-y-6">
      <div className="flex flex-col justify-center items-center">
        <Skeleton className="h-8 w-[250px] mb-6" />
        <Skeleton className="h-4 w-[400px] mb-2" />
        <Skeleton className="h-4 w-[100px] mb-2" />
      </div>
      <Skeleton className="w-full aspect-[4/1] animate-pulse[1s]" />
      <Skeleton className="h-8 w-[250px]" />
      <div className="flex flex-col gap-y-1">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    </main>
  );
};