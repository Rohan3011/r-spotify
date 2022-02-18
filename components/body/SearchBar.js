
import { MdOutlineShortText } from 'react-icons/md'
const SearchBar = ({ searchField, setSearchField }) => {
    return (
        <div className=" max-w-[1150px] bg-neutral-700 rounded-full border-2 
        overflow-hidden border-neutral-500 p-1 flex items-center
        " >
            <div onClick={() => setSearchField("")}
                className="h-4 w-4 rounded-full m-2  border-2 flex-shrink-0 animate-pulse hover:cursor-pointer" />
            <input
                type={"text"}
                value={searchField}
                placeholder={"Search..."}
                onChange={(e) => setSearchField(e.target.value)}
                className="bg-neutral-700 text-white  border-none text-lg
                 focus:ring-0 lg:w-full mx-2 placeholder-neutral-400 "
            />
            <div className='hidden lg:flex items-center divide divide-x-2 divide-neutral-500 mr-6 px-2 '>
                <div></div>
                <div className='flex items-center space-x-1 pl-2 text-neutral-300 cursor-pointer '>
                    <MdOutlineShortText className='text-xl' />
                    <span className="font-medium" >filter</span>
                </div>
            </div>
        </div>
    )
};

export default SearchBar;
