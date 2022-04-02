interface LinkProps {
    text?: string;
    href: string;
    icon?: React.ReactNode;
    className?: string;
    active?: boolean;
}
export default ({ text, href, icon, className, active = false }: LinkProps) => {
    return (
        <a className={`flex flex-row items-center justify-center space-x-2.5 font-semibold ${className}`}>
            <h1 className="text-4xl font-bold">
                <span className="text-gray-900">
                    {icon}
                </span>
            </h1>
            <p className={active ? "text-[#130B43]" : "text-[#5C5589]"}>
                {text}
            </p>
        </a>
    );
}