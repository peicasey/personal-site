import { jost } from "@/app/fonts";
import Card from "@/components/Card";
import LogPage from "@/components/LogPage";
import StyledImage from "@/components/StyledImage";
import StyledLink from "@/components/StyledLink";
import { LOGS } from "@/lib/logs";

export default function WebsiteRefactor() {
  return (
    <LogPage
      {...LOGS.WebsiteRefactor}
      topPara={
        <>
          <p>
            I had made my website during my sophomore summer as my first real
            experience with React (ie. not following a tutorial).
          </p>
          <p>
            An upside is that I learned a lot (yay), but the downside is that by
            the time I was done, I had already thought of a lot of things I
            would do differently both in design and coding (uh oh). Then I
            learned NextJS and it became my extreme preference for personal
            project development. Thus after putting any updates at all off for 2
            years, I decided I would entirely rehaul my website instead of
            updating it.
          </p>
          <p></p>
        </>
      }
    >
      <h2
        className="text-xl sm:text-3xl font-bold uppercase pt-8"
        style={jost.style}
      >
        The Original Design
      </h2>

      <p>
        Compared to development in industry or even just in a group in general,
        I prefer taking a looser approach when I'm the sole developer. This is
        mostly because I think it's easier to get my ideas down without having
        to commit to it and make a whole Figma of it since I don't mind
        deviating when it comes to my own whims. I scanned through a lot of
        websites for inspiration (see here) and sketched out some designs.
      </p>

      <StyledImage src="/logs/website-refactor/old1.png" alt="oogly boogly" />

      <div>
        <p>
          Some elements that I really liked from my research that you may see
          reflected in these sketches are:
        </p>
        <ul className="pl-8 list-disc flex flex-col gap-3 sm:gap-0">
          <li>3D elements / parallax</li>
          <li>movement on scroll</li>
          <li>cycling through things (banners, text, experience)</li>
        </ul>
      </div>

      <StyledImage src="/logs/website-refactor/old2.png" alt="oogly boogly" />

      <p>
        In order to have a 3D model of myself on my website, I would need to
        make said 3D model. I didn't have the time to learn proper 3D modeling,
        so instead I opted for using this site called{" "}
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href={"https://beta.womp.com"}
        >
          Womp
        </StyledLink>{" "}
        which basically lets you combine shapes in a sculpting format. I
        actually had to make multiple, one in a sitting pose and one standing,
        as well as edits after I decided to cut my hair short.
      </p>

      <StyledImage src="/logs/website-refactor/old3D.png" alt="oogly boogly" />

      <p>dadsklfj</p>

      <StyledImage
        src="/logs/website-refactor/developing.png"
        alt="oogly boogly"
      />

      <p>
        Surprisingly enough despite the many flaws I now see in the site, I
        actually did receive a lot of positive feedback at the time I published
        it. Classmates at university mentioned knowing of my website without me
        having to have already shown it to them, was even emailed asking for
        advice (thanks{" "}
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.linkedin.com/in/kaylee-bae/"}
        >
          Kaylee
        </StyledLink>{" "}
        for reaching out! made me feel very helpful), and even had it
        <StyledLink href={"/works/logs/website-plagiarized"}>
          {" "}
          plagiarized
        </StyledLink>
        . Best of all, I was actually very proud of how it turned out!
      </p>

      <h2
        className="text-xl sm:text-3xl font-bold uppercase pt-8"
        style={jost.style}
      >
        The New Design
      </h2>

      <p>
        Time changes a lot of things though, and so of course this includes my
        thoughts on the site.
      </p>

      <div>
        <p>
          There were a number of technical aspects that I wanted to improve upon
          for the new version as well as my plan to tackle them:
        </p>
        <ul className="pl-8 list-disc flex flex-col gap-3 sm:gap-0">
          <li>
            SEO — using NextJS, robots.txt and other optimizations from my first
            site
          </li>
          <li>
            improving performance — optimizing the 3D model, consolidating UI
            frameworks (when I first made the site, I somehow used both Radix,
            MUI, and Ant Design)
          </li>
          <li>cycling through things (banners, text, experience)</li>
        </ul>
      </div>

      <div>
        <p>
          There was also design aspects that I now appreciated more and wanted
          to switch up in the new design:
        </p>
        <ul className="pl-8 list-disc flex flex-col gap-3 sm:gap-0">
          <li>
            appreciating simplicity — I felt like my previous design really just
            combined every single thing I found at all cool on other sites but
            after viewing more, I saw more minimal sites as very aesthetic in
            their own way
          </li>
          <li>
            unifying component aesthetic throughout site — as part of just
            inserting anything I found cool, I felt certain pages didn't match
            very well with each other and was just less efficient through not
            reusing many comp
          </li>
          <li>cycling through things (banners, text, experience)</li>
        </ul>
      </div>

      <StyledImage src="/logs/website-refactor/new2.png" alt="oogly boogly" />
      <StyledImage src="/logs/website-refactor/new1.png" alt="oogly boogly" />
      <StyledImage src="/logs/website-refactor/new3.png" alt="oogly boogly" />

      <p>
        I also made a slideshow in Google Slides to collect inspiration for both
        the dark and light mode, as well as see a more solidified version of the
        design compared to my drawings. This was still very loose and for my own
        amusement so if you look below some of the filler text is nonsensical
        haha. However in general, I would actually recommend using Google Slides
        if it isn't too much trouble to.
      </p>

      <figure>
        <Card className="w-full h-autop-0 sm:p-0 overflow-hidden">
          <iframe
            className="flex-grow w-full h-[50vw]"
            src="https://docs.google.com/presentation/d/e/2PACX-1vToBphKbBNsM0o0PZqXJwPTDzPAgYFsxhS5Zz2io2--ET-b30wB9auH5N9jtgC6iHLzq7WU3JY2K5mx/pubembed?start=true&loop=true&delayms=3000"
            allowFullScreen
          ></iframe>
        </Card>
        <figcaption className="text-stone-500 italic text-center">
          asdkjfl
        </figcaption>
      </figure>

      <p>
        Of course this time, I also had to actually 3D model. Not just to
        arbitrarily make things harder for myself but also because part of the
        performance issue I had last time was from using Womp. Essentially
        because of how it's not really 3D modeling so much as it is sculpting,
        it doesn't allow you to control the number of faces, etc. which can lead
        to the model being extremely large and cumbersome. The old Womp 3D model
        was 22.6 MB and the new one was 45 KB! :O
      </p>

      <StyledImage src="/logs/website-refactor/new3D.png" alt="oogly boogly" />

      <div>
        <p>
          If you're just starting out with Blender, I'm definitely not a good
          person to learn from, so I instead recommend these tutorials if you
          want to make something similar:
        </p>
        <ul className="pl-8 list-disc flex flex-col gap-3 sm:gap-0">
          <li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              href={"https://youtu.be/O6HQhs-gk50?si=fS8jdHOqXwuenP7O"}
            >
              general intro to modeling humanoid characters
            </StyledLink>
          </li>
          <li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              href={"https://youtu.be/m-Obo_nC3SM?si=jQe9a7LD7SNQSFZv"}
            >
              general intro to rigging
            </StyledLink>
          </li>
          <li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              href={"https://youtu.be/-XYryP_GU8o?si=twSGi5AUdTaa6UFv"}
            >
              creating low poly characters
            </StyledLink>
          </li>
          <li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              href={"https://youtu.be/E96m9Z4iTcc?si=W7OOCMU5GxCr94sD"}
            >
              how to cycle faces on low poly characters
            </StyledLink>
          </li>
        </ul>
      </div>

      <h2
        className="text-xl sm:text-3xl font-bold uppercase pt-8"
        style={jost.style}
      >
        Reflection
      </h2>

      <p>
        After spending so long on this overhaul by only working on it on and off
        during the school year, I can honestly say that at least for now I'm
        satisfied. I would still definitely recommend working on a personal site
        as a personal project especially if it's your first time coding a
        non-commandline project. Even if not, I think it's a fun way to combine
        personal expression and learning. That's just me on my soap box, though
        I'm sure some people would rather use a template and be done with it.
      </p>

      <p>
        Anyways that was fun! I guess we'll see if I decide to overhaul the
        entire site again sometime.
      </p>

      <h2
        className="text-xl sm:text-3xl font-bold uppercase pt-8"
        style={jost.style}
      >
        Notes
      </h2>

      <ol className="pl-8 list-decimal flex flex-col gap-3 sm:gap-0">
        <li>fdf</li>
        <li>
          This isn't to say that Womp is bad, I think it's probably just best in
          use cases where performance matters, ex. making 2D images of the 3D
          model, 3D printing, etc.
        </li>
      </ol>
    </LogPage>
  );
}
