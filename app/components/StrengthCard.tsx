type Props = {
    strength: {
        title: string;
        text: string;
    };
    index: number;
};

export const StrengthCard = ({ strength, index }: Props) => {
    return (
        // <div className="w-[260px] h-[272px] p-5 border-1 border-white/40 flex flex-col justify-between">
        <div className="w-full max-w-[260px] aspect-[260/272] p-5 border-1 border-white/40">
            <p className="font-display font-bold text-4xl text-white/40 text-center">
                {index}
            </p>
            <div className="h-fit flex flex-col gap-y-4 pt-4">
                <p className="font-medium">{strength.title}</p>
                <p className="text-sm">{strength.text}</p>
            </div>
        </div>
    );
};
