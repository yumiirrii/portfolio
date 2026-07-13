import Image from "next/image";
import { Button } from "./Button";
import { HeaderBlock } from "./HeaderBlock";

type Props = {
    detail: {
        figmaImage: string;
        name: string;
        overview: string;
        year: string;
        concept: string;
        stack: string;
        challenges: string;
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
                            text={detail.challenges}
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex gap-x-5 justify-center sm:justify-end">
                            <Button label="View Figma" state="primary" />
                            <Button label="View GitHub" state="primary" />
                        </div>
                    </div>
                </div>
            </div>

            {/* figma image */}
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1 min-w-0 max-w-[450px]">
                    <Image
                        src={detail.figmaImage}
                        width={450}
                        height={300}
                        alt="work detail app figma before"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
                <div className="flex-1 min-w-0 max-w-[450px]">
                    <Image
                        src={detail.figmaImage}
                        width={450}
                        height={300}
                        alt="work detail app figma after"
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};
