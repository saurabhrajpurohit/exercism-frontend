import { ReactComponent as Down } from "../icons/down.svg";
import Select from "../components/Select";
import Option from "../components/Option";

interface SelectProps {
    selected: string;
    onSelect: (sort: string) => void;
}

interface Option {
    title: string;
    value: string;
}

const Options = [
    {
        title: "Newest First",
        value: "newest_first"
    },
    {
        title: "Oldest First",
        value: "oldest_first"
    },
]

export default ({ selected, onSelect }: SelectProps) => {
    return (
        <Select label={
            <div className="flex items-center h-12 w-80 bg-[#F0F3F9] px-6 rounded-md">
                <span className="grow text-left text-[#5C5589]">
                    {selected ? Options.find(option => option.value == selected)?.title : "Sort by Most Recent"}
                </span>
                <span className="text-gray-900">
                    <Down />
                </span>
            </div>
        }
        >
            {Options.map((option: Option) => {
                return (
                    <Option key={option.value} selected={selected == option.value} onSelect={() => onSelect(option.value)}>
                        <div className="font-medium text-base">
                            {option.title}
                        </div>
                    </Option>
                )
            })}
        </Select>
    )
}