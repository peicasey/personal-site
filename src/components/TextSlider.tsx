"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { CgScrollV } from "react-icons/cg";

interface Props {
  items: React.ReactNode[];
}

const TextSlider = React.memo<Props>(function TextSliderFunction({ items }) {
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef: any = useRef(null);

  const resetTimeout = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [timeoutRef]);

  const scrollNext = React.useCallback(
    () => setIndex((prev) => (prev + 1) % items.length),
    [setIndex, items.length]
  );

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, items.length]);

  return (
    <div className="flex gap-[6px] items-center">
      <button
        className="rounded-lg py-[2px] border border-black text-black bg-yellow-400
                text-xs md:text-sm
                hover:bg-yellow-300"
        onClick={scrollNext}
      >
        <CgScrollV />
      </button>
      {/* this is where you need to change any font-size stuff */}
      <div className="w-full overflow-hidden max-h-[1em]">
        <div
          className="flex flex-col no-wrap duration-500 ease-in-out "
          style={{
            transform: `translate3d(0, ${-index * 1}em, 0)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center max-h-[1em] translate-y-[-0.5px] overflow-hidden whitespace-nowrap truncate"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default TextSlider;
