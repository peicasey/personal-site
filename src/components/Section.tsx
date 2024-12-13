import React from "react";

interface Props {
  children: React.ReactNode;
}

const Section = React.memo<Props>(function SectionFunction({ children }) {
  return (
    <div className="flex flex-col p-8 sm:p-12 md:px-16 lg:px-28 xl:px-36 gap-8 items-center w-full">
      {children}
    </div>
  );
});

export default Section;
