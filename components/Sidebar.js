import Image from "next/image"
import { BsMicFill, BsThreeDots } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaCompass } from "react-icons/fa";




const Sidebar = () => {
    return (
        <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-neutral-800
        w-[80px] h-screen space-y-8
         " >
            <Image src="/Spotify-icon.png"
                alt="icon"
                height={50}
                width={50}
                objectFit={"contain"}
            />
            <div className=" flex flex-col space-y-8">
                <HiHome className="icon text-2xl" />
                <BsMicFill className="icon text-2xl" />
                <FaCompass className="icon text-2xl" />
                <BsThreeDots className="icon text-2xl" />
            </div>
        </section>
    )
};

export default Sidebar;



