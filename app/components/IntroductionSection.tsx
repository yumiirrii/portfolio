import { StrengthsSection } from "./StrengthsSection";
import { Title } from "./Title";

type Props = {
    introduction: {
        aboutMe: string;
        strengths: {
            header: string;
            text: string;
        }[];
        skills: {
            header: string;
            text: string;
        }[];
    };
};

export const IntroductionSection = ({ introduction }: Props) => {
    return (
        <div className="w-full flex-1 px-8 sm:px-15 lg:px-30">
            <div className="w-full bg-[#272727] text-white px-8 sm:px-15 md:px-23 py-10 sm:py-13 rounded-4xl flex flex-col gap-y-13">
                {/* About Me */}
                <div className="flex flex-col gap-y-7">
                    <Title title="About Me" white />
                    <p className="text-sm md:text-base whitespace-pre-wrap px-2 sm:px-5">
                        {introduction.aboutMe}
                    </p>
                </div>

                {/* 5 Core Strengths */}
                <StrengthsSection strengths={introduction.strengths} />

                {/* Skills */}
                <div className="flex flex-col gap-y-7">
                    <Title title="Skills" white />
                    <div className="px-2 sm:px-5 flex flex-col gap-y-4">
                        {introduction.skills.map((skill) => (
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
    );
};
