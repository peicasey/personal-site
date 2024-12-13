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
import React, { useState } from "react";
import LegendItem from "@/components/more/archives/LegendItem";
import Page from "@/components/Page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Year } from "@/lib/course";

export default function Archives() {
  const SEMESTERLY_COURSES = SEMESTERLY_COURSES_RAW as YearlyCourses[];
  const [selectedYear, setSelectedYear] = useState(Year.ALL);

  return (
    <Page>
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
        <div className="w-full flex flex-col-reverse lg:flex-row gap-6 overflow-hidden">
          <Card>
            <ul
              role="list"
              className="divide-y divide-neutral-100 dark:divide-neutral-800"
            >
              {SEMESTERLY_COURSES.filter(
                (semesterCourses) =>
                  selectedYear == Year.ALL ||
                  semesterCourses.year == selectedYear
              ).map((semesterCourses, i) => (
                <CourseSection {...semesterCourses} key={"course" + i} />
              ))}
            </ul>
          </Card>
          <div className="min-w-[16em]">
            <div className="flex items-center gap-2 pb-4">
              <div>Year(s):</div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="min-w-12 text-black dark:text-white bg-accent dark:bg-accent group hover:bg-accent duration-200 w-min flex gap-2 items-center border py-0 rounded-full border-black dark:border-stone-500 dark:yellow-glow-sm">
                    {selectedYear}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  {Object.values(Year).map((year) => (
                    <DropdownMenuItem onClick={() => setSelectedYear(year)}>
                      {year}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Card>
              <h2 className="font-bold uppercase text-lg" style={jost.style}>
                Legend
              </h2>
              <ul
                role="list"
                className="divide-y divide-neutral-100 dark:divide-neutral-800"
              >
                {Object.entries(COURSE_COLOR_KEY).map(([purpose, color], i) => (
                  <li key={i}>
                    <LegendItem
                      item={
                        <Tag
                          color={color}
                          children={" :) "}
                          clickable={false}
                        />
                      }
                      description={purpose}
                    />
                  </li>
                ))}
                <li key={"H"}>
                  <LegendItem item={"H"} description="Honors course" />
                </li>
                <li key={"*"}>
                  <LegendItem
                    item={"*"}
                    description="cross-listed graduate course"
                  />
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </Page>
  );
}
