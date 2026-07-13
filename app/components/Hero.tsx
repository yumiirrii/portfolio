import Image from "next/image";
import { landingData } from "../data";

export const Hero = () => {
    const data = landingData;

    return (
        <div className="w-full h-auto md:min-h-[67svh] md:max-h-[650px] px-15 md:px-20 xl:px-40 py-5 md:py-0 flex flex-col justify-start gap-y-5 md:gap-y-0 md:justify-between items-center font-display">
            {/* <div className="w-full h-auto md:min-h-[75svh] md:max-h-[650px] px-15 md:px-20 xl:px-40 py-10 flex flex-col justify-start gap-y-10 md:justify-between items-center font-display"> */}
            {/* <h1 className="text-[7.5vw] lg:text-[100px] font-bold text-nowrap [-webkit-text-stroke:1px_black]"> */}
            <h1 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-center whitespace-pre-wrap sm:whitespace-nowrap leading-[1.0] sm:leading-normal [-webkit-text-stroke:1px_black]">
                {`DESIGN\n & \nCODE`}
            </h1>
            <div className="w-full flex flex-col md:flex-row flex-col-reverse gap-y-8 items-center md:justify-between md:flex-1 min-h-0">
                <Image
                    src="/laptop-left.png"
                    width={368}
                    height={230}
                    alt="left laptop image"
                    className="hidden md:block md:w-[368px] h-auto object-contain"
                    priority
                />
                <div className="flex flex-col gap-y-3 md:gap-y-8 items-center shrink-0 md:px-5">
                    <h2 className="font-bold text-2xl md:text-3xl">
                        {data.hero.nameJp}
                    </h2>
                    <div className="flex flex-col md:gap-y-2 items-center text-center">
                        <h3 className="font-semibold text-xl md:text-2xl">
                            {data.hero.nameEn}
                        </h3>
                        <h4 className="font-semibold text-lg md:text-xl">
                            {data.hero.job}
                        </h4>
                    </div>
                </div>
                <Image
                    src="/laptop-right.png"
                    width={368}
                    height={230}
                    alt="right laptop image"
                    className="w-[200px] md:w-[368px] max-w-full h-auto object-contain"
                    priority
                />
            </div>
        </div>
    );
};
