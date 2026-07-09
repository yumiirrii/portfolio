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
        overview: string;
        year: string;
        concept: string;
        stack: string;
        challenges: string;
    };
};

export const DetailCard = ({ detail }: Props) => {
    return (
        <div className="w-full p-10 flex flex-col gap-y-10 border border-[#272727] rounded-4xl">
            {/* hero */}
            <div className="flex flex-col flex-col-reverse lg:flex-row gap-10 justify-between">
                <div className="flex flex-col gap-y-20 flex-1 shrink">
                    <p className="font-display font-bold text-3xl">
                        {detail.name}
                    </p>
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
                        alt="work detail app top"
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
                        alt="work detail app top"
                        className="w-full max-w-[450px] h-auto object-contain"
                        priority
                    />
                    <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
                        <div className="flex-1 min-w-0 max-w-[326px]">
                            <Image
                                src={detail.pcImage}
                                width={326}
                                height={204}
                                alt="work detail app top"
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                        <div className="w-[95px] shrink-0">
                            <Image
                                src={detail.mobileImage}
                                width={95}
                                height={204}
                                alt="work detail app top"
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
                        text={detail.challenges}
                    />
                    {/* buttons */}
                    <div className="flex-1 flex flex-col gap-y-5 w-full justify-end">
                        <div className="flex justify-end">
                            <Button label="Live Demo" state="primary" />
                        </div>
                        <div className="flex gap-x-5 justify-end">
                            <Button label="View Figma" state="secondary" />
                            <Button label="View GitHub" state="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
