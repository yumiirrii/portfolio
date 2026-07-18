import Image from "next/image";
import { Button } from "./Button";
import { HeaderBlock } from "./HeaderBlock";

type Props = {
    detail: {
        topImage: string;
        figmaImage: string;
        pcImage: string;
        mobileImage: string;
        name: string;
        subName: string;
        overview: string;
        year: string;
        concept: string;
        stack: string;
        challenges: string[];
        demoUrl: string;
        figmaUrl: string;
        githubUrl: string;
    };
};

export const DetailCard = ({ detail }: Props) => {
    return (
        <div className="w-full p-4 sm:p-10 flex flex-col gap-y-10 border border-[#272727] rounded-4xl">
            {/* hero */}
            <div className="flex flex-col flex-col-reverse lg:flex-row gap-10 justify-between">
                <div className="flex flex-col gap-y-10 flex-1 shrink">
                    <div className="font-display font-bold flex flex-col gap-y-1">
                        <p className="text-3xl">{detail.name}</p>
                        <p className="text-lg">{detail.subName}</p>
                    </div>
                    <div className="flex flex-col gap-y-10">
                        <HeaderBlock header="Overview" text={detail.overview} />
                        <HeaderBlock header="Created" text={detail.year} />
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src={detail.topImage}
                        width={600}
                        height={375}
                        alt="work detail app-top image"
                        className="min-w-[320px] w-[600px] h-auto object-contain"
                        priority
                    />
                </div>
            </div>

            {/* main content */}
            <div className="flex flex-col flex-col-reverse md:flex-row gap-10">
                <div className="flex flex-col gap-y-8 flex-1 min-w-0">
                    <Image
                        src={detail.figmaImage}
                        width={450}
                        height={300}
                        alt="work detail figma image"
                        className="w-full h-auto object-contain"
                        priority
                    />
                    <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
                        <div className="flex-[3.4] min-w-0">
                            <Image
                                src={detail.pcImage}
                                width={326}
                                height={204}
                                alt="work detail pc ui image"
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                        <div className="flex-[1] min-w-0">
                            <Image
                                src={detail.mobileImage}
                                width={95}
                                height={204}
                                alt="work detail mobile ui image"
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-y-10 shrink min-w-0">
                    <HeaderBlock
                        header="Design Concept"
                        text={detail.concept}
                    />
                    <HeaderBlock header="Tech Stack" text={detail.stack} />
                    <HeaderBlock
                        header="Challenges/Learnings"
                        texts={detail.challenges}
                    />
                    {/* buttons */}
                    <div className="flex-1 flex flex-col gap-y-5 w-full justify-center sm:justify-end">
                        <a
                            href={detail.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center sm:justify-end"
                        >
                            <Button label="Live Demo" state="primary" />
                        </a>
                        <div className="flex flex-row gap-x-5 justify-center sm:justify-end">
                            <a
                                href={detail.figmaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button label="View Figma" state="secondary" />
                            </a>
                            <a
                                href={detail.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button label="View GitHub" state="secondary" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
