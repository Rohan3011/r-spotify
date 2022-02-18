import React from 'react';

const genre = ["Classical", "Minimal", "Hip-hop", "Chillout", "Rock", "Pop", "Heavy Metal", "Jazz", "Folk", "Disco"]

const Genres = () => {
    return (
        <div className="p-6 flex flex-col justify-center space-y-2" >
            <h2 className="title">
                Genres
            </h2>
            <div className=" flex flex-wrap justify-center algin-center gap-1.5 ">
                {
                    genre.slice(0, 6).map((value, index) => (
                        <div className="tags" key={index}>
                            {value}
                        </div>
                    ))
                }
            </div>
            <div className="tags flex justify-center items-center mx-2" >
                <span>All Genres</span>
            </div>
        </div >
    );
};

export default Genres;
