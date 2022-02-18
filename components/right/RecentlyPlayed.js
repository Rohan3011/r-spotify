import React from 'react';
import { HiViewGrid } from 'react-icons/hi';
import PlayPause from '../PlayPause';

const RecentlyPlayed = ({ recentlyPlayed }) => {


    return (
        <div className="p-6 rounded-lg border-2 border-neutral-600 space-y-4" >
            <div className="flex items-center p-1  justify-between ">
                <h2 className=' text-slate-300 font-bold'> Recently played </h2>
                <HiViewGrid className='icon mx-4' />
            </div>
            <div className="p-2 h-[250px] scrollbar-thin  scrollbar-thumb-neutral-700 scrollbar-thumb-rounded hover:scrollbar-thumb-neutral-600 overflow-y-scroll">
                {
                    recentlyPlayed.map((track, index) => {
                        return (
                            <RecentTrack track={track} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default RecentlyPlayed;


const RecentTrack = ({ track }) => {
    return (
        <div className="group text-neutral-300 text-sm rounded-lg p-2 hover:bg-neutral-600 
         shadow   cursor-pointer mr-2 flex items-center">
            <div className="grow" >
                <PlayPause track={track} >
                    <div className="flex space-x-4 items-center">
                        <img src={track.image}
                            alt="img"
                            className="w-12 h-12 object-cover rounded-lg"

                        />
                        <div className='space-y-1 sm:w-full'>
                            <h2 className='font-semibold text-base text-neutral-300 truncate w-[200px] ' > {track.title} </h2>
                            <p className='text-xs text-neutral-300'> {track.artist} </p>
                        </div>
                    </div>
                </PlayPause>
            </div>
        </div>
    )
}