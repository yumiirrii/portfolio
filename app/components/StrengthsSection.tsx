import { StrengthCard } from "./StrengthCard";
import { Title } from "./Title";

type Props = {
    strengths: { title: string; text: string }[];
};

export const StrengthsSection = ({ strengths }: Props) => {
    return (
        <div className="flex flex-col gap-y-7 w-full">
            <Title title="5 Core Strengths" white />

            {/* 💡 1. 【デスクトップ大画面（2xl:）】 横1列 */}
            <div className="hidden 2xl:flex justify-center gap-6">
                {strengths.map((strength, index) => (
                    <StrengthCard
                        key={index}
                        strength={strength}
                        index={index + 1}
                    />
                ))}
            </div>

            {/* 💡 2. 【デスクトップ画面（lg:〜2xl:）】 上3・下2 */}
            <div className="hidden lg:flex 2xl:hidden flex-col gap-y-6">
                <div className="flex justify-center gap-6">
                    {strengths.slice(0, 3).map((strength, index) => (
                        <StrengthCard
                            key={index}
                            strength={strength}
                            index={index + 1}
                        />
                    ))}
                </div>
                <div className="flex justify-center gap-6">
                    {strengths.slice(3).map((strength, index) => (
                        <StrengthCard
                            key={index + 3}
                            strength={strength}
                            index={index + 4}
                        />
                    ))}
                </div>
            </div>

            {/* 💡 3. 【ノートPC・タブレット（sm:〜lg:）】 上2・中央2・下1 */}
            <div className="hidden sm:flex lg:hidden flex-col gap-y-6">
                <div className="flex justify-center gap-6">
                    {strengths.slice(0, 2).map((strength, index) => (
                        <StrengthCard
                            key={index}
                            strength={strength}
                            index={index + 1}
                        />
                    ))}
                </div>
                <div className="flex justify-center gap-6">
                    {strengths.slice(2, 4).map((strength, index) => (
                        <StrengthCard
                            key={index}
                            strength={strength}
                            index={index + 3}
                        />
                    ))}
                </div>
                <div className="flex justify-center">
                    <StrengthCard strength={strengths[4]} index={5} />
                </div>
            </div>

            {/* 💡 4. 【スマホ（sm未満）】 縦1列 */}
            <div className="flex flex-col items-center gap-y-6 sm:hidden">
                {strengths.map((strength, index) => (
                    <StrengthCard
                        key={index}
                        strength={strength}
                        index={index + 1}
                    />
                ))}
            </div>
        </div>
    );
};
