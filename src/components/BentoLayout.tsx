"use client";

import React, { useState, useEffect, ReactElement, ReactNode } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { HOME_LAYOUT, HOME_LAYOUT_COLORS, KEYS } from "@/lib/bentolayouts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Angry,
  Annoyed,
  ArrowUpRight,
  Frown,
  Laugh,
  Meh,
  MousePointerClick,
  Smile,
} from "lucide-react";
import { GoArrowRight } from "react-icons/go";

// CREDIT: https://codesandbox.io/p/sandbox/react-jq5y4?file=%2Fsrc%2FApp.js%3A72%2C18
// heavily based this code off of this user ^ so much so that I've left the helpful
// comments they made :]

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const layouts = HOME_LAYOUT;

enum breakpoint {
  lg = "lg",
  md = "md",
  sm = "sm",
  xs = "xs",
  xxs = "xxs",
}

export default function BentoLayout() {
  const SMILEYS = [
    <Angry fill="#ffc567ff" />,
    <Annoyed fill="#ffc567ff" />,
    <Frown fill="#ffc567ff" />,
    <Laugh fill="#ffc567ff" />,
    <Meh fill="#ffc567ff" />,
    <Smile fill="#ffc567ff" />,
  ];
  const compactType = "vertical";
  const cols: { lg: number; md: number; sm: number; xs: number; xxs: number } =
    {
      lg: 6,
      md: 6,
      sm: 6,
      xs: 4,
      xxs: 2,
    };
  const [mounted, setmounted] = useState(false);
  const [layout, setLayout] = useState(layouts.lg);
  const [smiley, setSmiley] = useState(SMILEYS[SMILEYS.length - 1]);

  function randomSmiley() {
    let i = Math.floor(Math.random() * (SMILEYS.length - 1));
    i = SMILEYS[i] != smiley ? i : (i + 1) % SMILEYS.length;
    setSmiley(SMILEYS[i]);
    console.log(i);
  }

  useEffect(() => {
    setmounted(true);
  }, []);

  const onBreakpointChange = (breakpoint: breakpoint) => {
    setLayout(layouts[breakpoint]);
  };

  const HOME_LAYOUT_CONTENT: Record<KEYS, ReactNode> = {
    a: <p className="text-4xl hover:rotate-[360deg] duration-500">🍊</p>,
    b: (
      <MousePointerClick className="scale-150 -rotate-12 hover:rotate-2 hover:text-orange-900 text-basically-orange duration-500"></MousePointerClick>
    ),
    c: (
      <p className="translate-y-1 text-[#ffdfaa] hover:text-[#35270f] hover:translate-y-0 duration-500">
        hey hi hello!
      </p>
    ),
    d: (
      <div className="flex xs:block gap-3 text-2xl xs:text-3xl font-bold text-green-950">
        <p className="text-6xl xs:text-4xl">work</p>
        <div>
          <Link
            href="/work/projects"
            className="group duration-200 flex items-center gap-1 hover:text-[#c8cb66]"
          >
            projects
            {/* <ArrowUpRight className="stroke-[3.5] translate-y-[0.75] group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" /> */}
            <GoArrowRight className="stroke-[1.5] group-hover:translate-x-1 duration-200" />
          </Link>
          <Link
            href="/work/logs"
            className="group duration-200 flex items-center gap-1 hover:text-[#c8cb66]"
          >
            logs
            {/* <ArrowUpRight className="stroke-[3.5] translate-y-[0.75] group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" /> */}
            <GoArrowRight className="stroke-[1.5] group-hover:translate-x-1 duration-200" />
          </Link>
        </div>
      </div>
    ),
    e: (
      <Link
        href="/about"
        className="group duration-200 flex items-center gap-2 text-3xl font-bold text-orange-950"
        onMouseEnter={randomSmiley}
      >
        about me
        <div className=" group-hover:translate-x-1 group-hover:scale-110 duration-200">
          {smiley}
        </div>
      </Link>
    ),
    f: (
      <p className="text-stone-500 scale-90 hover:scale-100 text-xl font-bold opacity-0 hover:opacity-100 duration-500">
        👻
      </p>
    ),
  };

  return (
    <div className="w-full pb-8 px-8 sm:px-12 md:px-16 lg:px-28 xl:px-36">
      <ResponsiveReactGridLayout
        rowHeight={50}
        cols={cols}
        layouts={layouts}
        measureBeforeMount={false}
        onBreakpointChange={onBreakpointChange}
        useCSSTransforms={mounted}
        preventCollision={!compactType}
      >
        {layout.map((itm, i) => (
          <div
            key={itm.i}
            data-grid={itm}
            className={cn(
              "cursor-grab active:cursor-grabbing select-none border bg-white dark:bg-black border-black dark:border-orange-900 flex justify-center items-center rounded-md dark:yellow-glow-md"
            )}
            style={{
              background: `${
                itm.i != "f" ? HOME_LAYOUT_COLORS[itm.i as KEYS] : null
              }`,
            }}
          >
            {HOME_LAYOUT_CONTENT[itm.i as KEYS]}
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
}
