import React from "react";

interface Props {
  children: React.ReactNode;
}

const Section = React.memo<Props>(function SectionFunction({ children }) {
  return (
    <div className="flex flex-col p-16 gap-8 items-center w-full">
      {children}
    </div>
  );
});

export default Section;
