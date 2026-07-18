import Image from "next/image";
import { Button } from "./Button";
import { HeaderBlock } from "./HeaderBlock";

type Props = {
    detail: {
        mainImage: string;
        largeImage: string;
        name: string;
        overview: string;
        year: string;
        concept: string;
        stack: string;
        challenges: string[];
        figmaUrl: string;
        githubUrl?: string;
    };
};

export const OthersDetailCard = ({ detail }: Props) => {
    return (
        <div className="w-full p-4 sm:p-10 flex flex-col gap-y-10 border border-[#272727] rounded-4xl">
            <p className="font-display font-bold text-3xl">{detail.name}</p>
            {/* main content */}
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 flex flex-col gap-y-10">
                    <HeaderBlock header="Overview" text={detail.overview} />
                    <HeaderBlock header="Created" text={detail.year} />
                    <HeaderBlock
                        header="Design Concept"
                        text={detail.concept}
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-y-10 h-fit">
                        <HeaderBlock header="Tech Stack" text={detail.stack} />
                        <HeaderBlock
                            header="Challenges/Learnings"
                            texts={detail.challenges}
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-end">
                        <div className="flex gap-x-5 justify-center sm:justify-end">
                            <a
                                href={detail.figmaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button label="View Figma" state="primary" />
                            </a>
                            {detail.githubUrl && (
                                <a
                                    href={detail.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        label="View GitHub"
                                        state="secondary"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* figma image */}
            <div className="flex flex-col lg:flex-row gap-10 justify-center">
                <div className={`flex-[4] min-w-0 max-w-[600px]`}>
                    <Image
                        src={detail.largeImage}
                        width={600}
                        height={300}
                        alt="work detail before-after image"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
                <div className="flex-[3] min-w-0 max-w-[450px]">
                    <Image
                        src={detail.mainImage}
                        width={450}
                        height={300}
                        alt="work detail main image"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};
