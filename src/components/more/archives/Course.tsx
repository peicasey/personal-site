import React from "react";
import { jost } from "@/app/fonts";
import { CourseInfo, getCourseColor } from "@/lib/course";
import Tag from "@/components/Tag";

interface Props extends CourseInfo {}

const Course = React.memo<Props>(function TagFunction({
  code,
  title,
  professor,
  credit,
  symbol,
  purpose,
}) {
  return (
    <li className="p-2 hover:rounded-md hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center flex-grow-0 gap-1 sm:gap-2">
          <Tag
            text={`${symbol} ${code}`}
            color={getCourseColor(purpose)}
            clickable={false}
          ></Tag>
          <span
            className="font-bold whitespace-nowrap text-md overflow-hidden truncate max-w-[15em] lg:max-w-[40em] md:max-w-[20em] sm:max-w-[15em]"
            style={jost.style}
          >
            {title}
          </span>
        </div>
        <div className="flex-grow h-[1px] bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="hidden sm:block text-xs sm:text-sm min-w-[30px] sm:min-w-[2em] text-right text-stone-600">
          {credit} CR
        </div>
      </div>
      <div className="mt-1 flex items-center gap-1">
        <div className="block sm:hidden text-sm text-stone-600">
          ({credit} CR)
        </div>
        <span className="text-sm text-stone-600 italic">
          taught by {professor}
        </span>
      </div>
    </li>
  );
});

export default Course;
