interface BadgeProps {
    children: React.ReactNode;
    count?: number;
}

export default ({ children, count }: BadgeProps) => {
    return (
        <div className="relative flex items-center h-full">
            <div className={`badge ${count ? "badge-count" : ""}`}>
                <div className="badge-dot">{count}</div>
            </div>
            {children}
        </div>
    )
}