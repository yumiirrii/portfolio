type Props = {
    label: string;
    state: "primary" | "secondary";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ label, state, onClick }: Props) => {
    const styles = {
        primary: "bg-[#272727] text-white",
        secondary: "border-1 border-black text-black",
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
