import React from 'react';
import { IoMdNotifications, IoMdSettings } from 'react-icons/io';
import { MdBookmark } from 'react-icons/md';
import Dropdown from './Dropdown';



const Header = () => {
    return (
        <nav className=" flex text-slate-200 items-center justify-center space-x-4" >
            <div className='px-4 py-2 flex space-x-4 text-xl border-2 border-neutral-600 rounded-full' >
                <MdBookmark className='icon' />
                <IoMdNotifications className='icon' />
                <IoMdSettings className='icon' />
            </div>

            <Dropdown />
        </nav>
    )
};

export default Header;
