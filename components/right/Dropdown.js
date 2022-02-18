import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiLogout, HiChevronDown } from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";

export default function Dropdown() {
    const { data: session } = useSession();

    return (
        <Menu as="div" className="w-28 h-12 relative flex items-center  rounded-full">
            <div className="w-full relative right-1 group">
                <Menu.Button className="flex items-center w-full px-4 py-2 text-sm font-medium text-white border-2 border-neutral-600  rounded-full">
                    <h2 className="truncate w-[60px] text-left " >{session.user.name} </h2>
                    <img
                        src={session.user.image}
                        alt=""
                        className="rounded-full w-14 h-14 p-1 absolute -right-[15px] object-cover"
                    />

                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-28 origin-top-right bg-neutral-700 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active && "bg-neutral-600"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold tracking-wide text-slate-300 cursor-default`}
                                    onClick={() => signOut({ redirect: false })}
                                >
                                    <HiLogout className="w-5 h-5 mr-2" aria-hidden="true" />
                                    Log out
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}