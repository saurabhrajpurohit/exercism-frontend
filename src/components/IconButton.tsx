interface ButtonProps {
    onClick: () => void;
    text?: string;
    className?: string;
    icon?: React.ReactNode;
    h?: number;
    w?: number;
}

export default ({ text, onClick, icon, className = "" }: ButtonProps) => {
    return (
        <button className={`flex items-center justify-center ${className}`} onClick={onClick}>
            {icon}
            {text}
        </button>
    )
}