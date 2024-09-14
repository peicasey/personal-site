import Link, { LinkProps } from "next/link";
import React from "react";

interface Props extends LinkProps {
  children: React.ReactNode;
}

const StyledLink = React.memo<Props>(function StyledLinkFunction({
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      className="decoration-dashed underline text-basically-orange hover:text-orange-yellow dark:text-orange-yellow dark:hover:text-generic-yellow"
    >
      {children}
    </Link>
  );
});

export default StyledLink;
