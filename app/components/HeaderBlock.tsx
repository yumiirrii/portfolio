type Props = {
    header: string;
    text: string;
};

export const HeaderBlock = ({ header, text }: Props) => {
    return (
        <div className="w-full flex flex-col gap-y-2">
            <p className="font-display font-bold text-2xl">{header}</p>
            <p className="text-[#272727]/90 whitespace-pre-wrap">{text}</p>
        </div>
    );
};
