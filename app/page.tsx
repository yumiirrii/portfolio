import { Hero } from "./components/Hero";
import { landingTexts } from "./texts";
import { Title } from "./components/Title";
import { StrengthsSection } from "./components/StrengthsSection";
import { SubtitleText } from "./components/SubtitleText";
import { WorkCard } from "./components/WorkCard";

export default function Home() {
    const texts = landingTexts;

    return (
        <div className="landing-bg bg-cover bg-center w-full min-w-full min-h-svh flex flex-col">
            {/* ヒーロー */}
            <Hero />

            {/* 自己紹介エリア */}
            <div className="w-full flex-1 px-15 lg:px-30">
                <div className="w-full bg-[#272727] text-white px-15 md:px-23 py-13 rounded-4xl flex flex-col gap-y-13">
                    {/* About Me */}
                    <div className="flex flex-col gap-y-7">
                        <Title title="About Me" white />
                        <p className="text-sm md:text-base whitespace-pre-wrap pl-5">
                            {texts.aboutMe}
                        </p>
                    </div>

                    {/* 5 Core Strengths */}
                    <StrengthsSection strengths={texts.strengths} />

                    {/* Skills */}
                    <div className="flex flex-col gap-y-7">
                        <Title title="Skills" white />
                        <div className="pl-5 flex flex-col gap-y-4">
                            {texts.skills.map((skill) => (
                                <SubtitleText
                                    key={skill.title}
                                    title={skill.title}
                                    text={skill.text}
                                    white
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Work一覧エリア */}
            <div className="w-full px-20 lg:px-40 pt-20 pb-30 flex flex-col gap-y-7">
                <Title title="Works" />
                <div className="flex flex-col sm:flex-row gap-8 items-center sm:justify-center sm:items-stretch">
                    {texts.works.map((work) => (
                        <WorkCard key={work.title} work={work} />
                    ))}
                </div>
            </div>
        </div>
    );
}
