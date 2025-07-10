import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, {
  HTMLAttributeAnchorTarget,
  HTMLAttributeReferrerPolicy,
} from "react";

interface Props extends LinkProps {
  className?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  children: React.ReactNode;
}

const StyledLink = React.memo<Props>(function StyledLinkFunction({
  className,
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      className={cn(
        "decoration-dashed underline text-dark-orange hover:text-basically-orange dark:text-orange-yellow dark:hover:text-generic-yellow",
        className
      )}
    >
      {children}
    </Link>
  );
});

export default StyledLink;
