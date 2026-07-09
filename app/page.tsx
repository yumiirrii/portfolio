import { Hero } from "./components/Hero";
import { landingData } from "./data";
import { Title } from "./components/Title";
import { StrengthsSection } from "./components/StrengthsSection";
import { WorkCard } from "./components/WorkCard";

export default function Home() {
    const data = landingData;

    return (
        <div className="landing-bg bg-cover bg-center w-full min-w-full min-h-svh flex flex-col">
            {/* ヒーロー */}
            <Hero />

            {/* 自己紹介エリア */}
            <div className="w-full flex-1 px-8 sm:px-15 lg:px-30">
                <div className="w-full bg-[#272727] text-white px-15 md:px-23 py-13 rounded-4xl flex flex-col gap-y-13">
                    {/* About Me */}
                    <div className="flex flex-col gap-y-7">
                        <Title title="About Me" white />
                        <p className="text-sm md:text-base whitespace-pre-wrap pl-5">
                            {data.aboutMe}
                        </p>
                    </div>

                    {/* 5 Core Strengths */}
                    <StrengthsSection strengths={data.strengths} />

                    {/* Skills */}
                    <div className="flex flex-col gap-y-7">
                        <Title title="Skills" white />
                        <div className="pl-5 flex flex-col gap-y-4">
                            {data.skills.map((skill) => (
                                <div
                                    key={skill.header}
                                    className="w-full flex flex-col gap-y-1"
                                >
                                    <p className="font-display font-bold text-xl text-white/40">
                                        {skill.header}
                                    </p>
                                    <p className="text-white">{skill.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Work一覧エリア */}
            <div className="w-full px-20 lg:px-40 pt-20 pb-30 flex flex-col gap-y-7">
                <Title title="Works" />
                <div className="flex flex-col gap-y-10">
                    <div className="flex flex-col md:flex-row gap-10 w-full items-center md:justify-center md:items-stretch">
                        {data.works.slice(0, 2).map((work, index) => (
                            <WorkCard key={work.name} work={work} />
                        ))}
                    </div>
                    <div className="w-full flex justify-center">
                        {data.works.slice(2).map((work, index) => (
                            <WorkCard key={work.name} work={work} others />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
