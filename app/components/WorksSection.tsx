import Link from "next/link";
import { Title } from "./Title";
import { WorkCard } from "./WorkCard";
import { Button } from "./Button";

type Props = {
    works: {
        featured: {
            imageUrl: string;
            name: string;
            text: string;
            year: string;
            path: string;
        }[];
        others: {
            name: string;
            text: string;
        }[];
    };
};

export const WorksSection = ({ works }: Props) => {
    return (
        <div
            className="w-full px-8 sm:px-20 lg:px-35 pt-20 pb-30 flex flex-col gap-y-10"
            id="works"
        >
            <Title title="Works" />

            <div className="w-full max-w-[420px] md:max-w-[880px] xl:max-w-[1200px] mx-auto flex flex-col">
                {/* items-stretchで横並び時の高さを揃える。スマホ時は中央寄せ */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12 items-stretch justify-items-center md:justify-items-stretch">
                    {/* featured 2枚 */}
                    {works.featured.map((work) => (
                        <div
                            key={work.name}
                            className="w-full h-full flex flex-col [&>*]:flex-1"
                        >
                            <WorkCard work={work} />
                        </div>
                    ))}

                    {/* Other Works 1枚 */}
                    <div className="w-full flex flex-col gap-y-3 md:col-span-2 xl:col-span-1">
                        <p className="font-display font-bold text-2xl">
                            Other Works
                        </p>
                        <div className="flex-1 flex flex-col justify-between pt-10 pr-5 pb-5 pl-5 md:pl-10 xl:pl-5 border-1 border-[#272727] rounded-4xl">
                            <div className="flex flex-col gap-y-4">
                                {works.others.map((work) => (
                                    <div
                                        key={work.name}
                                        className="flex flex-col sm:flex-row items-start sm:items-center xl:flex-col gap-y-1 sm:gap-x-3"
                                    >
                                        <div className="w-[200px] xl:w-full font-display font-semibold text-base md:text-lg shrink-0">
                                            {work.name}
                                        </div>
                                        <div className="flex-1 xl:w-full text-sm">
                                            {work.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full flex justify-end pt-5 mt-auto">
                                <Link href="/work/others">
                                    <Button
                                        label="View All Other Works"
                                        state="primary"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
