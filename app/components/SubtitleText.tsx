type Props = {
    title: string;
    text: String;
    white?: boolean;
};

export const SubtitleText = ({ title, text, white }: Props) => {
    return (
        <div className="w-full flex flex-col gap-y-1">
            <p
                className={`font-display font-bold text-xl ${white ? "text-white/40" : "text-black/40"}`}
            >
                {title}
            </p>
            <p className={`${white ? "text-white" : "text-black"}`}>{text}</p>
        </div>
    );
};
