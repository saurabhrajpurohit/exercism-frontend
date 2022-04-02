import React from "react";
import { ReactComponent as LeftArrow } from "../icons/left_arrow.svg";
import { ReactComponent as RightArrow } from "../icons/right_arrow.svg";

interface Button {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    active?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

const Button = ({ children, disabled, active, onClick, className, iconPosition, icon }: Button) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={
                `${active
                    ? "bg-[#E1EBFF] text-[#130B43] border-[#76709F]"
                    : "bg-transparent text-[#5C5589] border-[#D5D8E4]"} 
                ${className}
                h-10 px-4 border 
                rounded-md
                mx-[6px]
                font-medium
                disabled:bg-[#E0E0ED] disabled:text-[#76709F]`}>
            <div className="flex items-center">
                {iconPosition === "left" && (
                    <span className="mr-[10px]">
                        {icon}
                    </span>
                )}
                {children}
                {iconPosition === "right" && (
                    <span className="ml-[10px]">
                        {icon}
                    </span>
                )}
            </div>
        </button>
    )
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const getPages = (totalPages: number, selected: number, onChange: (page: number) => void) => {
    let pages = [];
    for (let i = selected - 2; i <= selected + 2; i++) {
        if (i > 0 && i <= totalPages) {
            pages.push(i);
        }
    }

    return (
        <>
            {!pages.includes(1) && (
                <>
                    <Button active={selected == 1} onClick={() => onChange(1)}>
                        1
                    </Button>
                    <span className="px-3 flex items-center tracking-wider">
                        ...
                    </span>
                </>
            )}
            {pages.map(
                (page) => {
                    return (
                        <Button key={`pagination-button-${page}`} active={selected == (page)} onClick={() => onChange(page)}>
                            {page}
                        </Button>
                    );
                }
            )}
            {!pages.includes(totalPages) && (
                <>
                    <span className="px-3 flex items-center tracking-wider">
                        ...
                    </span>
                    <Button active={selected == totalPages} onClick={() => onChange(totalPages)}>
                        {totalPages}
                    </Button>
                </>
            )}
        </>
    )

};

export default ({ totalPages, onPageChange, currentPage }: PaginationProps) => {
    return (
        <div className="px-8 py-4">
            <div className="flex justify-between">
                <Button onClick={() => onPageChange(currentPage - 1)} iconPosition="left" icon={<LeftArrow />} disabled={currentPage == 1 || totalPages <= 0}>
                    Previous
                </Button>
                <div className="flex justify-center">
                    {totalPages > 0 && getPages(totalPages, currentPage, onPageChange)}
                </div>
                <Button onClick={() => onPageChange(currentPage + 1)} iconPosition="right" icon={<RightArrow />} disabled={currentPage == totalPages || totalPages <= 0}>
                    Next
                </Button>
            </div>
        </div>
    )
}