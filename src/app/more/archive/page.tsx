"use client";

import SEMESTERLY_COURSES_RAW from "../../../../public/courses.json";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import Card from "@/components/Card";
import BackButton from "@/components/arrow-buttons/BackButton";
import { cn } from "@/lib/utils";
import CourseSection from "@/components/more/archives/CourseSection";
import { COURSE_COLOR_KEY, YearlyCourses } from "@/lib/course";
import { jost } from "@/app/fonts";
import Tag from "@/components/Tag";
import React from "react";
import LegendItem from "@/components/more/archives/LegendItem";

export default function Archive() {
  const SEMESTERLY_COURSES = SEMESTERLY_COURSES_RAW as YearlyCourses[];

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Section>
        <div className="w-full flex items-center">
          <div className="min-w-24">
            <BackButton>back</BackButton>
          </div>
        </div>
        <H1 url="" subtitle="university stuff">
          Archives
        </H1>
        <p>
          I was too lazy to meticulously go through course titles + I find a lot
          of them slightly janky and very non-descriptive, so I've just named
          them whatever I found appropriate given what it went over. However, if
          you are attending Texas A&M, I've included the course code so you can
          find it yourself if you're interested.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-6 sticky top-0">
          <Card>
            <ul
              role="list"
              className="divide-y divide-neutral-100 dark:divide-neutral-800"
            >
              {SEMESTERLY_COURSES.map((semesterCourses, i) => (
                <CourseSection {...semesterCourses} />
              ))}
            </ul>
          </Card>
          <div className="min-w-[16em]">
            <Card>
              <h2 className="font-bold uppercase text-lg" style={jost.style}>
                Legend
              </h2>
              <ul
                role="list"
                className="divide-y divide-neutral-100 dark:divide-neutral-800"
              >
                {Object.entries(COURSE_COLOR_KEY).map(([purpose, color]) => (
                  <LegendItem
                    item={
                      <Tag color={color} children={" :) "} clickable={false} />
                    }
                    description={purpose}
                  />
                ))}
                <LegendItem item={"H"} description="Honors course" />
                <LegendItem
                  item={"*"}
                  description="cross-listed graduate course"
                />
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
