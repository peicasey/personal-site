import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Card from "./Card";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const StyledImage = React.memo<Props>(function StyledImageFunction({
  src,
  alt,
  className,
}) {
  return (
    <figure className="py-4">
      <Card className="p-0 sm:p-0 overflow-hidden">
        <Image
          src={src}
          className={cn("w-full", className)}
          width={1600}
          height={900}
          alt={alt}
        ></Image>
      </Card>
      <figcaption className="text-stone-500 italic text-center">
        {alt}
      </figcaption>
    </figure>
  );
});

export default StyledImage;
