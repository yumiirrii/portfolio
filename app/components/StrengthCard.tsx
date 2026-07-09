type Props = {
    strength: {
        header: string;
        text: string;
    };
    index: number;
};

export const StrengthCard = ({ strength, index }: Props) => {
    return (
        // <div className="w-[260px] h-[272px] p-5 border-1 border-white/40 flex flex-col justify-between">
        <div className="flex flex-col min-w-[240px] w-[260px] aspect-[260/272] p-5 border border-white/40">
            <p className="font-display font-bold text-4xl text-white/40 text-center">
                {index}
            </p>
            <div className="flex flex-col gap-y-4 pt-4 flex-1">
                <p className="font-medium">{strength.header}</p>
                <p className="text-sm mt-auto">{strength.text}</p>
            </div>
        </div>
    );
};
