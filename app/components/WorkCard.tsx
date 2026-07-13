import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";

type Props = {
    work: {
        imageUrl: string;
        name: string;
        text: string;
        year: string;
        path: string;
    };
};

export const WorkCard = ({ work }: Props) => {
    return (
        <div className="w-full max-w-[420px] h-auto flex flex-col overflow-hidden border-1 border-[#272727] rounded-4xl">
            <Image
                src={work.imageUrl}
                width={420}
                height={240}
                alt="work app image"
                className="w-full h-auto object-contain"
                priority
            />
            <div className="p-5 flex flex-col gap-y-5 flex-1">
                <div className="flex flex-col gap-y-2">
                    <div className="bg-[#72FFF7] w-fit px-1 py-0.5 font-display font-bold text-sm">
                        Featured
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
                        <Button label="View Detail" state="primary" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
