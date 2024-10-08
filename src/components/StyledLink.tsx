import Link, { LinkProps } from "next/link";
import React, {
  HTMLAttributeAnchorTarget,
  HTMLAttributeReferrerPolicy,
} from "react";

interface Props extends LinkProps {
  target?: HTMLAttributeAnchorTarget | undefined;
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  children: React.ReactNode;
}

const StyledLink = React.memo<Props>(function StyledLinkFunction({
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      className="decoration-dashed underline text-dark-orange hover:text-basically-orange dark:text-orange-yellow dark:hover:text-generic-yellow"
    >
      {children}
    </Link>
  );
});

export default StyledLink;
