import React from "react";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import { jost } from "@/app/fonts";
import StyledLink from "@/components/StyledLink";

export default function Experience() {
  return (
    <Section>
      <H1 url="/about/#experience" subtitle="doing / have done">
        Experience
      </H1>
      <div className="w-full flex flex-col gap-6 sm:gap-4">
        <div>
          <h2 className="font-bold text-lg mb-2 sm:mb-0" style={jost.style}>
            Currently:
          </h2>
          <ul className="ml-4 list-disc flex flex-col gap-3 sm:gap-0">
            <li>
              🎓 Pursuing an Honors Computer Science degree with a Minor in
              Statistics (
              <StyledLink target="_blank" href="https://www.tamu.edu/">
                @Texas A&M University
              </StyledLink>
              )
            </li>
            <li>
              🕸️ Applying sparse linear algebra to create performant graph
              algorithms (
              <StyledLink
                target="_blank"
                href="https://people.engr.tamu.edu/davis/welcome.html"
              >
                @Dr. Tim Davis
              </StyledLink>
              )
            </li>
            <li>
              🧬 Analyzing biostatistics data (
              <StyledLink
                target="_blank"
                href="https://ibt.tamu.edu/faculty/kurt-zhang.html"
              >
                @Dr. Kurt Zhang
              </StyledLink>
              )
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2 sm:mb-0" style={jost.style}>
            Previously:
          </h2>
          <ul className="ml-4 list-disc flex flex-col gap-3 sm:gap-0">
            <li>
              🤖 Streamlined no-code LLM chatbot creation workflows (
              <StyledLink target="_blank" href="https://palantir.com">
                @Palantir Technologies
              </StyledLink>
              )
            </li>
            <li>
              🚀 Increased diversity and inclusion in AI/ML (
              <StyledLink target="_blank" href="https://ai-4-all.org/">
                @AI4ALL
              </StyledLink>
              )
            </li>
            <li>
              ⚛️ Created C# and Electron desktop apps at (
              <StyledLink target="_blank" href="https://arbin.com">
                @Arbin Instruments
              </StyledLink>
              )
            </li>
            <li>
              🧑‍🔬 Applied island-clustering algorithms in breast cancer
              detection (
              <StyledLink target="_blank" href="https://ibt.tamu.edu">
                @Institute of Biosciences and Technologies
              </StyledLink>
              )
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2 sm:mb-0" style={jost.style}>
            At University:
          </h2>
          <ul className="ml-4 list-disc flex flex-col gap-3 sm:gap-0">
            <li>
              👾 Create games with my team (
              <StyledLink
                target="_blank"
                href="https://tagdigda.wixsite.com/gamedev"
              >
                @Texas A&M Game Developers
              </StyledLink>
              )
            </li>
            <li>
              🧑‍💻 Organize competitive coding contests (
              <StyledLink target="_blank" href="https://tx.ag/acpcwebsite">
                @Aggie Competitive Coding Club
              </StyledLink>
              )
            </li>
            <li>
              ⚙️ Hold exam reviews for the freshmen engineering class (
              <StyledLink target="_blank" href="https://engrtao.tech">
                @Engineering TA Organization
              </StyledLink>
              )
            </li>
            <li>
              💻 Ordered 200 pizzas for project presentations (
              <StyledLink target="_blank" href="https://aggiecodingclub.com">
                @Aggie Coding Club
              </StyledLink>
              )
            </li>
            <li>
              👷‍♀️ Advocated for women in STEM fields (
              <StyledLink target="_blank" href="https://www.swetamu.com/">
                @Society of Women Engineers
              </StyledLink>
              )
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
