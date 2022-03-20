interface ButtonProps {
    onClick: () => void;
    text?: string;
    className?: string;
    icon?: string;
    badge?: boolean;
}

export default ({ text, onClick, icon, className = "", badge }: ButtonProps) => {
    return (
        <div className="relative w-full rounded-full gradient-bg">
            {badge && <div className="float-button-badge"></div>}
            <button className={`w-full h-9 rounded-full flex items-center justify-center  font-semibold space-x-2 ${className}`} onClick={onClick}>
                <span>
                    <img src={icon} />
                </span>
                <span >
                    {text}
                </span>
            </button>
        </div>
    )
}