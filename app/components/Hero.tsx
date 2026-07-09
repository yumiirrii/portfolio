import Image from "next/image";
import { landingTexts } from "../texts";

export const Hero = () => {
    const texts = landingTexts;

    return (
        <div className="w-full h-[75svh] max-h-[650px] px-15 lg:px-40 py-10 flex flex-col justify-between items-center font-display">
            <h1 className="text-[7.5vw] lg:text-[100px] font-bold text-nowrap">
                DESIGN & CODE
            </h1>
            <div className="w-full flex flex-col md:flex-row flex-col-reverse gap-y-8 items-center md:justify-between flex-1">
                <Image
                    src="/laptop-left.png"
                    width={368}
                    height={230}
                    alt="left laptop image"
                    className="hidden md:flex md:w-[368px] w-full h-auto object-contain"
                    priority
                />
                <div className="flex flex-col gap-y-3 md:gap-y-8 items-center shrink-0 md:px-5">
                    <h2 className="font-bold text-2xl md:text-3xl">
                        {texts.hero.nameJp}
                    </h2>
                    <div className="flex flex-col md:gap-y-2 items-center text-center">
                        <h3 className="font-semibold text-xl md:text-2xl">
                            {texts.hero.nameEn}
                        </h3>
                        <h4 className="font-semibold text-lg md:text-xl">
                            {texts.hero.job}
                        </h4>
                    </div>
                </div>
                <Image
                    src="/laptop-right.png"
                    width={368}
                    height={230}
                    alt="right laptop image"
                    className="md:w-[368px] w-full h-auto object-contain"
                    priority
                />
            </div>
        </div>
    );
};
