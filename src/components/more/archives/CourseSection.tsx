import React from "react";
import { jost } from "@/app/fonts";
import Course from "./Course";
import { YearlyCourses } from "@/lib/course";

interface Props extends YearlyCourses {}

const CourseSection = React.memo<Props>(function CourseSectionFunction({
  year,
  semester,
  courses,
}) {
  return (
    <div className="mt-4 border-none">
      <div className="flex gap-4 sm:gap-6 items-center justify-between w-full">
        <h2
          className="whitespace-nowrap text-lg font-bold uppercase"
          style={jost.style}
        >
          {year} {semester}
        </h2>
        <div className="w-full h-[1px] bg-stone-400"></div>
      </div>
      <ul>
        {courses.map((course, j) => (
          <Course {...course} key={"course" + j} />
        ))}
      </ul>
    </div>
  );
});

export default CourseSection;
