import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

interface Select {
    label: any;
    options?: Array<any>;
    children: any;
}

export default ({ label, children }: Select) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center w-full text-sm font-medium rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {label}
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute max-h-80 p-1 overflow-auto mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {children}
                </Menu.Items>
            </Transition>
        </Menu>
    )
};