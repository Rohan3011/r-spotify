import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { IoMdHeadset } from 'react-icons/io';
import PlayPause from '../PlayPause';
import PlayPauseIcon from '../PlayPauseIcon';

const Track = ({ track, chooseTrack }) => {

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }

    return (
        <div className="group  text-neutral-300 text-sm rounded-lg p-3 hover:bg-neutral-600 
         shadow   cursor-pointer mr-2 flex items-center">
            <div className="grow" >
                <PlayPause track={track} chooseTrack={chooseTrack} >
                    <div className="flex space-x-4 items-center">
                        <img src={track.image}
                            alt="img"
                            className="w-12 h-12 object-cover rounded-lg"

                        />
                        <div className='space-y-1 w-40 md:w-full'>
                            <h2 className='font-semibold text-base text-neutral-300 truncate ' > {track.title} </h2>
                            <p className='text-xs text-neutral-300'> {track.artist} </p>
                        </div>
                    </div>
                </PlayPause>
            </div>


            <div className='ml-auto flex items-center space-x-2.5 '>
                <div className='flex items-center justify-center space-x-1'>
                    <IoMdHeadset className='text-base icon' />
                    <h6>{track.popularity} </h6>
                </div>

                <div className="relative w-20 space-x-2 flex items-center rounded-full border-[1px] border-neutral-500 group-hover:border-neutral-300 " >
                    <div className='p-2 ml-1 '>
                        {
                            (liked) ? <AiFillHeart
                                className='text-lg icon text-[#1DB954]'
                                onClick={handleLike}
                            />
                                : <AiFillHeart
                                    className='text-lg text-slate-300 icon'
                                    onClick={handleLike}

                                />
                        }
                    </div>

                    <div className='absolute -right-0.5  rounded-full border-2 border-neutral-400 group-hover:bg-[#1ed760] p-1'>
                        <PlayPauseIcon track={track} className={"text-2xl"} />
                    </div>
                </div>
            </div>
        </div >
    )
};
export default Track;


