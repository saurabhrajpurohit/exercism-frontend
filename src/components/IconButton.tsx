interface ButtonProps {
    onClick: () => void;
    text?: string;
    className?: string;
    icon?: string;
    h?: number;
    w?: number;
}

export default ({ text, onClick, icon, className = "", h = 6, w = 6 }: ButtonProps) => {
    return (
        <button className={`${className} w-${w} h-${h} flex items-center justify-center`} onClick={onClick}>
            <img src={icon} />
            {text}
        </button>
    )
}