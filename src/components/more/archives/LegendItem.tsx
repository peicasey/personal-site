import React from "react";

interface Props {
  item: React.ReactNode;
  description: string;
}

const LegendItem = React.memo<Props>(({ item, description }) => (
  <div className="flex items-start gap-2 mt-1 rounded-md hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]">
    <div className="min-w-[2.5em] flex items-start gap-2">
      <div>{item}</div>
      <div className="w-full h-[1.5em] flex items-center">
        <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-700"></div>
      </div>
    </div>
    <div className="text-sm">{description}</div>
  </div>
));

export default LegendItem;
