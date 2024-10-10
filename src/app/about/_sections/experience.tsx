import React from "react";
import H1 from "@/components/H1";
import Section from "@/components/Section";
import { jost } from "@/app/fonts";
import StyledLink from "@/components/StyledLink";
import Card from "@/components/Card";
import { COMMON_LINKS } from "@/lib/commonLinks";

export default function Experience() {
  return (
    <Section>
      <H1 url="/about/#experience" subtitle="doing / have done">
        Experience
      </H1>
      <Card className="w-full flex flex-col gap-6 sm:gap-4">
        <div>
          <h2 className="font-bold text-lg mb-2 sm:mb-0" style={jost.style}>
            Currently:
          </h2>
          <ul className="ml-4 list-disc flex flex-col gap-3 sm:gap-0">
            <li>
              🎓 Pursuing an Honors Computer Science degree with a Minor in
              Statistics (
              <StyledLink target="_blank" href={COMMON_LINKS.TAMU}>
                @Texas A&M University
              </StyledLink>
              )
            </li>
            <li>
              🕸️ Applying sparse linear algebra to create performant graph
              algorithms (
              <StyledLink target="_blank" href={COMMON_LINKS.DAVIS}>
                @Dr. Tim Davis
              </StyledLink>
              )
            </li>
            <li>
              🧬 Analyzing biostatistics data (
              <StyledLink target="_blank" href={COMMON_LINKS.ZHANG}>
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
              <StyledLink target="_blank" href={COMMON_LINKS.PALANTIR}>
                @Palantir Technologies
              </StyledLink>
              )
            </li>
            <li>
              🚀 Increased diversity and inclusion in AI/ML (
              <StyledLink target="_blank" href={COMMON_LINKS.AI4ALL}>
                @AI4ALL
              </StyledLink>
              )
            </li>
            <li>
              ⚛️ Created C# and Electron desktop apps at (
              <StyledLink target="_blank" href={COMMON_LINKS.ARBIN}>
                @Arbin Instruments
              </StyledLink>
              )
            </li>
            <li>
              🧑‍🔬 Applied island-clustering algorithms in breast cancer
              detection (
              <StyledLink target="_blank" href={COMMON_LINKS.IBT}>
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
              👾 Creating games with my team (
              <StyledLink target="_blank" href={COMMON_LINKS.TAGD}>
                @Texas A&M Game Developers
              </StyledLink>
              )
            </li>
            <li>
              🧑‍💻 Organizing competitive coding contests (
              <StyledLink target="_blank" href={COMMON_LINKS.ACPC}>
                @Aggie Competitive Coding Club
              </StyledLink>
              )
            </li>
            <li>
              ⚙️ Held exam reviews for the freshmen engineering class (
              <StyledLink target="_blank" href={COMMON_LINKS.TAO}>
                @Engineering TA Organization
              </StyledLink>
              )
            </li>
            <li>
              💻 Ordered 200 pizzas for project presentations (
              <StyledLink target="_blank" href={COMMON_LINKS.ACC}>
                @Aggie Coding Club
              </StyledLink>
              )
            </li>
            <li>
              👷‍♀️ Advocated for women in STEM fields (
              <StyledLink target="_blank" href={COMMON_LINKS.SWE}>
                @Society of Women Engineers
              </StyledLink>
              )
            </li>
          </ul>
        </div>
      </Card>
    </Section>
  );
}
