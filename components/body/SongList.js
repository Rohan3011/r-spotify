import Track from './Track';

const SongList = ({ albums, title, chooseTrack }) => {

    return (
        <main className="p-2 flex space-x-4" >
            <div className=" flex-grow space-y-1 " >
                <h2 className="title">
                    {title}
                </h2>
                <div className="max-h-[1000px]  md:h-96  p-2  border-2 border-neutral-600 rounded-lg overflow-y-scroll  scrollbar-thin  scrollbar-thumb-neutral-700 scrollbar-thumb-rounded hover:scrollbar-thumb-neutral-600 ">
                    {
                        albums.map((track) => (
                            <Track track={track}
                                chooseTrack={chooseTrack}
                                key={track.id}
                            />
                        ))
                    }
                </div>
                <div className='h-12'> </div>
            </div>
        </main>
    )
};

export default SongList;
