import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";

type Props = {
    work: {
        imageUrl: string;
        label: string;
        name: string;
        text: string;
        year: string;
        path: string;
    };
    others?: boolean;
};

export const WorkCard = ({ work, others }: Props) => {
    return (
        <div
            className={`w-full h-auto bg-white flex rounded-4xl overflow-hidden max-w-[420px] flex-col ${others ? "md:max-w-[880px] md:flex-row" : ""}`}
        >
            <Image
                src={work.imageUrl}
                width={420}
                height={240}
                alt="work app image"
                // className={`${others ? "" : "w-full h-auto object-contain"}`}
                priority
            />
            <div className="p-5 flex flex-col gap-y-5 flex-1">
                <div className="flex flex-col gap-y-2">
                    <div
                        className={`${others ? "bg-[#FFCB5A]" : "bg-[#72FFF7]"} w-fit px-1 py-0.5 font-display font-bold text-sm`}
                    >
                        {work.label}
                    </div>
                    <div className="font-display font-bold text-2xl">
                        {work.name}
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <p className="font-medium">{work.text}</p>
                    <p className="font-medium text-sm">{work.year}</p>
                </div>
                <div className="w-full flex justify-end">
                    <Link href={work.path}>
                        <Button label="See Detail" state="primary" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
