import React from "react";

interface InputProps {
    label: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    icon: React.ReactNode;
}

export default ({ icon, value, onChange, placeholder }: InputProps) => {
    return (
        <div className="flex items-center h-12 w-80 bg-[#F0F3F9] px-5 rounded-md">
            <span className="text-gray-900 mr-4">
                {icon}
            </span>
            <span className="text-gray-900 grow text-left">
                <input className="bg-transparent focus:outline-none text-[#5C5589]" value={value} onChange={onChange} placeholder={placeholder} />
            </span>
        </div>
    );
}