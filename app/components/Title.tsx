type Props = {
    title: string;
    white?: boolean;
};

export const Title = ({ title, white }: Props) => {
    return (
        <p
            className={`font-display font-bold text-2xl md:text-3xl ${white ? "text-white/40" : "text-black"}`}
        >
            {title}
        </p>
    );
};
