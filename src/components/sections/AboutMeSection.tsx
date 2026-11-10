import { HighlightWording } from "../HighlightWording";
import { Section } from "../Section";
import { User } from "lucide-react";

export function AboutMeSection() {
  return (
    <Section id="about-me" imageFolder="about-me">
      <div className="text-white flex flex-col gap-10 backdrop-blur-md py-5 px-2.5 md:p-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <User className="size-5 text-white/80" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6 text-white/80 text-base md:text-lg leading-relaxed">
            <p>
              I&apos;m <HighlightWording>Teeraphat Saengkum</HighlightWording>,
              a <HighlightWording>Full-Stack Developer</HighlightWording>{" "}
              specializing in designing, developing, and maintaining{" "}
              <HighlightWording>
                high-performance web applications
              </HighlightWording>
              . Expertise in full-stack development using{" "}
              <HighlightWording>
                Next.js, React.js, and Node.js
              </HighlightWording>
              .
            </p>

            <p>
              Proven ability to lead technical projects, implement{" "}
              <HighlightWording>scalable system architectures</HighlightWording>
              , and optimize database performance. Beyond standard web
              engineering, I have a strong passion for building{" "}
              <HighlightWording>automated trading bot engines</HighlightWording>{" "}
              and exploring <HighlightWording>Cybersecurity</HighlightWording>{" "}
              concepts such as reverse engineering.
            </p>

            <p>
              Passionate about writing clean, maintainable, and type-safe code
              while delivering high-quality, impactful work that users and
              clients can rely on.
            </p>

            <p className="text-white font-medium text-lg pt-2">
              Let&apos;s Build Something Unforgettable! 🚀
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="size-48 rounded-full border-4 border-white overflow-hidden">
              <img
                src="/528e200b-4f2e-408f-b1b6-3f705e46afa7.jpg"
                alt="Teeraphat Saengkum"
                className="size-full object-bottom object-cover scale-[180%]"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
