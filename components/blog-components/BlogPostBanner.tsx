import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

interface BlogBannerProps {
  imgUrl: string
}

export default function BlogPostBanner({ imgUrl }: BlogBannerProps) {
  return (
    <AspectRatio ratio={40 / 10} className="bg-muted">
      <Image
        src={imgUrl}
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  );
}
