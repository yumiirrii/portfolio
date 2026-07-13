type Props = {
    label: string;
    state: "primary" | "secondary";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ label, state, onClick }: Props) => {
    const styles = {
        primary:
            "bg-[#272727] text-white transition-opacity duration-200 hover:opacity-60 active:opacity-30",
        secondary:
            "border-1 border-black text-black transition-colors duration-200 hover:bg-black/5 active:bg-black/10",
    };
    return (
        <button
            onClick={onClick}
            className={`w-fit px-8 py-4 rounded-4xl ${styles[state]} flex items-center gap-x-3 cursor-pointer transition-colors font-display font-bold text-sm`}
        >
            <span>{label}</span>
            <span>→</span>
        </button>
    );
};
