import { Section } from "../Section";
import { User } from "lucide-react";
// import { useI18n } from "@/context/i18n";

export function AboutMeSection() {
  //   const { t } = useI18n();

  return (
    <Section id="about-me" imageFolder="about-me">
      <div className="text-white flex flex-col gap-10 backdrop-blur-md p-5 md:p-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <User className="size-5 text-white/80" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            {"About Me"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6 text-white/70 text-base md:text-lg leading-relaxed">
            <p>
              I&apos;m{" "}
              <span className="text-emerald-400 font-medium">
                Teeraphat Saengkum
              </span>
              , a{" "}
              <span className="text-emerald-400 font-medium">
                Web Developer
              </span>{" "}
              with a passion for transforming ideas into{" "}
              <span className="text-emerald-400 font-medium">
                interactive web experiences
              </span>
              . While early in my career, I bring fresh perspectives and a
              dedication to creating intuitive, polished{" "}
              <span className="text-emerald-400 font-medium">
                applications that truly connect with users
              </span>
              . Every line of code is a step toward mastering my craft, and
              I&apos;m excited to deliver projects that are both beautiful and
              functional.
            </p>

            <p>
              Beyond my{" "}
              <span className="text-emerald-400 font-medium">
                front-end focus
              </span>
              , I also draw on experience with back-end and{" "}
              <span className="text-emerald-400 font-medium">
                full-stack projects
              </span>
              , allowing me to approach challenges from different angles and
              provide well-rounded solutions. My goal is not just to meet
              expectations but to exceed them,{" "}
              <span className="text-emerald-400 font-medium">
                delivering high-quality, impactful work
              </span>{" "}
              that clients can rely on.
            </p>

            <p className="text-white font-medium text-lg pt-2">
              Let&apos;s Build Something Unforgettable! 🚀
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            {/* <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-emerald-500/40 bg-white/5 shadow-2xl">
              <img
                src="/images/about/profile.png"
                alt="Teeraphat Saengkum"
                className="object-cover"
              />
            </div> */}
            <div className="size-48 rounded-full border-4 border-white overflow-hidden">
              <img
                src="/528e200b-4f2e-408f-b1b6-3f705e46afa7.jpg"
                className="size-full object-bottom object-cover scale-[180%]"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
