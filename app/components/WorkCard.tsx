import Image from "next/image";
import { Button } from "./Button";

type Props = {
    work: {
        path: string;
        label: string;
        title: string;
        text: string;
        year: string;
    };
};

export const WorkCard = ({ work }: Props) => {
    return (
        <div className="w-full max-w-[420px] h-auto bg-white flex flex-col rounded-4xl overflow-hidden">
            <Image
                src={work.path}
                width={420}
                height={240}
                alt="work app image"
                className="w-full h-auto object-contain"
                priority
            />
            <div className="p-5 flex flex-col gap-y-5 flex-1">
                <div className="flex flex-col gap-y-2">
                    <div className="bg-[#72fff7] w-fit px-1 py-0.5 font-display font-bold text-sm">
                        {work.label}
                    </div>
                    <div className="font-display font-bold text-xl">
                        {work.title}
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <p className="font-medium">{work.text}</p>
                    <p className="font-medium text-sm">{work.year}</p>
                </div>
                <div className="w-full flex justify-end">
                    <Button label="See Detail" state="primary" />
                </div>
            </div>
        </div>
    );
};
