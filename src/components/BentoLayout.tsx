"use client";

import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { HOME_LAYOUT, KEYS } from "@/lib/bentolayouts";

// CREDIT: https://codesandbox.io/p/sandbox/react-jq5y4?file=%2Fsrc%2FApp.js%3A72%2C18
// heavily based this code off of this user ^ so much so that I've left the helpful
// comments they made :]

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function BentoLayout(this: any) {
  const [compactType, setcompactType] = useState("vertical");
  const [mounted, setmounted] = useState(false);
  const [layout, setlayout] = useState(HOME_LAYOUT);

  useEffect(() => {
    setmounted(true);
  }, []);

  const onDrop = (elemParams: any) => {
    alert(
      `Element parameters:\n${JSON.stringify(
        elemParams,
        ["x", "y", "w", "h"],
        2
      )}`
    );
  };

  return (
    <div className="w-full px-8 sm:px-12 md:px-16 lg:px-28 xl:px-36">
      <ResponsiveReactGridLayout
        rowHeight={30}
        cols={{
          lg: 10,
          md: 10,
          sm: 6,
          xs: 4,
          xxs: 2,
        }}
        onDrop={onDrop}
        layouts={layout}
        measureBeforeMount={false}
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        useCSSTransforms={mounted}
        preventCollision={!compactType}
        isDroppable={true}
        droppingItem={{
          i: "xx",
          h: 50,
          w: 250,
        }}
      >
        {KEYS.map((itm, i) => (
          <div
            key={i}
            // data-grid={itm}
            className="cursor-grab active:cursor-grabbing select-none border border-black dark:border-white bg-generic-yellow flex justify-center items-center rounded-md dark:yellow-glow-md"
          >
            {itm}
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
}
