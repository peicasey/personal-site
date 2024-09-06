import BackButton from "@/components/BackButton";
import adventures from "@/data/adventures.json";
import Link from "next/link";
import { jost } from "@/app/fonts";

export default function Adventures() {
  return (
    <div>
      <div className="h-full dark:text-white duration-500">
        <div className="p-4 pt-24 pb-24 md:p-24 md:pb-32">
          <BackButton />
          <div className="bg-stone-50 dark:bg-neutral-900 rounded-lg pt-4 sm:pt-8 px-4 sm:px-8 pb-16 border-[1px] border-black">
            <div className="relative mb-2">
              <div>
                <h1 className="text-4xl sm:text-6xl dark:text-red-800 font-bold mr-2 duration-0">
                  ADVENTURES
                </h1>
              </div>
              <div className="absolute top-0 left-1 aria-hidden select-none">
                <h1 className="text-4xl sm:text-6xl font-bold text-amber-500 text-stroke">
                  ADVENTURES
                </h1>
              </div>
            </div>
            <p className="mb-4 text-neutral-500">
              A more casual record of stuff I've been up to! (Oversharing).
            </p>
            <div>
              <ul
                role="list"
                className="divide-y divide-neutral-100 dark:divide-neutral-800"
              >
                {adventures.map((adventure) => (
                  <Link
                    href={adventure.link}
                    className="flex justify-between items-center gap-4 p-2 hover:rounded-md hover:cursor-pointer hover:bg-[#f4f2ec] dark:hover:bg-[#25241e]"
                  >
                    <div className="flex items-center flex-grow-0">
                      <div className="aria-hidden select-none text-lg mr-2">
                        {adventure.symbol}
                      </div>
                      <span className="text-sm sm:text-md lg:text-md lg:max-w-[40em] md:max-w-[20em] sm:max-w-[15em]">
                        {adventure.desc}
                      </span>
                    </div>
                    <div className="flex-grow h-[1px] min-w-[25px] bg-neutral-200 dark:bg-neutral-700"></div>
                    <div
                      className="text-sm sm:text-md font-bold min-w-[5em]"
                      style={jost.style}
                    >
                      {adventure.date}
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
