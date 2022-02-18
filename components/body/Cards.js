import React from 'react';
import PlayPause from '../PlayPause';
import PlayPauseIcon from '../PlayPauseIcon';

const Cards = ({ albums }) => {
    return (
        <section className="h-[350px] max-w-[28rem] md:max-w-full grid scrollbar-hide overflow-x-auto p-4 grid-flow-col space-x-4
           rounded-lg group
           " >
            {
                albums.map((track) => (
                    <div key={track.id}>
                        <PlayPause track={track}>
                            <Poster
                                track={track}
                            />
                        </PlayPause>
                    </div>
                ))
            }
        </section>
    )
};
export default Cards;


const Poster = ({ track }) => {

    return (
        <div className=" relative overflow-hidden w-[200px] h-[300px]
         text-white/80 hover:cursor-pointer hover:scale-105 transition duration-200ms">
            <img
                src={track.image}
                alt="image not found"
                className="h-full w-full absolute inset-0 object-cover rounded-xl opacity-80
                group-hover:opacity-100  group "
            />
            <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-2" >
                <div className="h-10 w-10 rounded-full spotify-green flex justify-center items-center flex-shrink-0" >
                    <PlayPauseIcon track={track} />
                </div>

                <div className="text-white">
                    <h4 className="font-extrabold truncate w-[120px]">{track.title}</h4>
                    <h6 className='text-xs' >{track.artist}</h6>
                </div>
            </div>
        </div>
    )
}
