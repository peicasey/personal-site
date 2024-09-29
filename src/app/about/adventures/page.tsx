"use client";

import YEARLY_ADVENTURES from "../../../../public/adventures.json";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import Card from "@/components/Card";
import BackButton from "@/components/BackButton";
import AdventureSection from "@/components/about/adventures/AdventureSection";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";

export default function Adventures() {
  const [importantOnly, setImportantOnly] = useState(false);

  const toggleImportantOnly = useCallback(() => {
    setImportantOnly((prev) => !prev);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Section>
        <div className="w-full flex items-center">
          <div className="min-w-24">
            <BackButton href="/about">back</BackButton>
          </div>
          <label className="border border-black dark:border-neutral-400 dark:yellow-glow-sm bg-white dark:bg-black rounded-full flex justify-between items-center group px-2 py-1 gap-2 text-sm">
            important only?
            <input
              type="checkbox"
              onChange={toggleImportantOnly}
              className="absolute left-1/2 -translate-x-1/2 peer appearance-none rounded-md"
            />
            <span
              className={cn(
                "w-8 h-4 flex items-center flex-shrink-0 bg-neutral-300 dark:bg-neutral-800 rounded-full border border-black dark:border-white duration-300 ease-in-out peer-checked:bg-orange-yellow dark:peer-checked:bg-orange-yellow dark:peer-checked:yellow-glow-md",
                "after:w-4 after:h-4 after:bg-white after:rounded-full after:border after:border-black dark:after:border-white after:duration-300 peer-checked:after:translate-x-4",
                "group-hover:after:scale-110 group-hover:cursor-pointer"
              )}
            ></span>
          </label>
        </div>
        <H1 url="" subtitle="Casual record of stuff I've been up to!">
          Adventures
        </H1>
        <Card>
          <ul
            role="list"
            className="divide-y divide-neutral-100 dark:divide-neutral-800"
          >
            {YEARLY_ADVENTURES.map((yearlyAdventures, i) => (
              <AdventureSection
                {...yearlyAdventures}
                importantOnly={importantOnly}
              />
            ))}
          </ul>
        </Card>
      </Section>
    </main>
  );
}
