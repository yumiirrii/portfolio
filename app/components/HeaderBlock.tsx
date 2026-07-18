type Props = {
    header: string;
    text?: string;
    texts?: string[];
};

export const HeaderBlock = ({ header, text, texts }: Props) => {
    return (
        <div className="w-full flex flex-col gap-y-2">
            <p className="font-display font-bold text-2xl">{header}</p>
            {text && (
                <p className="text-[#272727]/90 whitespace-pre-wrap">{text}</p>
            )}
            {texts && texts.length > 0 && (
                <ul>
                    {texts.map((text) => (
                        <li
                            key={text}
                            className="before:content-['-'] before:mr-2 text-[#272727]/90"
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
