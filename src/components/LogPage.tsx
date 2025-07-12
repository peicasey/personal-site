"use client";

import Section from "@/components/Section";
import BackButton from "@/components/arrow-buttons/BackButton";
import { cn } from "@/lib/utils";
import { ReactNode, useCallback, useState } from "react";
import Page from "@/components/Page";
import { DetailsDisplay, LogInfo } from "@/lib/logs";
import { jost } from "@/app/fonts";
import Tag from "./Tag";

interface Props extends LogInfo {
  children?: ReactNode;
}

export default function LogPage({
  children,
  title,
  date,
  topicTags,
  text,
  link,
  cover,
  coverIsImage,
  details,
}: Props) {
  return (
    <Page>
      <Section>
        <div className="w-full">
          <BackButton>back</BackButton>
        </div>

        <div className="w-full relative overflow-hidden">
          <h1
            className="text-2xl sm:text-4xl font-bold uppercase"
            style={jost.style}
          >
            {title}
          </h1>
        </div>
        {!coverIsImage ? (
          <div className="w-full h-[20rem] select-none text-9xl border border-black bg-generic-yellow rounded-md p-8 flex items-center justify-center">
            {cover}
          </div>
        ) : (
          <div
            className={cn(
              cover,
              "w-full h-[20rem] bg-cover bg-center select-none text-2xl border border-black rounded-md p-8"
            )}
          ></div>
        )}
        <div className="flex flex-col-reverse sm:flex-row gap-4 w-full justify-between ">
          <div className="w-full">{text}</div>
          <div className="flex flex-col gap-4 w-full sm:max-w-[30%]">
            <div className="flex gap-2 flex-wrap">
              <span className="font-bold">Tags:</span>
              {topicTags.map((topicTag, i) => (
                <Tag {...topicTag} key={`tag${i}`} />
              ))}
            </div>
            {Object.keys(details).map((detail, i) => (
              <span>
                <b>{DetailsDisplay[detail]}</b>
                <br></br>
                {details[detail as keyof typeof details]}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full">{children}</div>
      </Section>
    </Page>
  );
}
