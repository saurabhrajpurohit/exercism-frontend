import { Menu } from '@headlessui/react'

interface Option {
    onSelect: () => void;
    selected: boolean;
    children: any;
};

export default ({ selected, children, onSelect }: Option) => {
    return (
        <Menu.Item onClick={onSelect}>
            {({ active }) => (
                <button
                    className={`${selected || active ? 'bg-[#F0F3F9]' : ''
                        } group flex rounded-md items-center w-full px-6 py-2 my-1 text-sm text-gray-900`}
                >
                    {children}
                </button>
            )}
        </Menu.Item>
    )
}