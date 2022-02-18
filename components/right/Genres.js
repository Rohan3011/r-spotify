import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchFieldState } from '../../atoms/playerAtom';

// const genre = ["Classical", "Minimal", "Hip-hop", "Chillout", "Rock", "Pop", "Heavy Metal", "Jazz", "Folk", "Disco"]

const Genres = ({ spotifyApi }) => {

    const [genre, setGenre] = useState([])
    const [showGenre, setShowGenre] = useState(false)
    const [searchField, setSearchField] = useRecoilState(searchFieldState)

    useEffect(() => {
        spotifyApi.getCategories({
        }).then(function (res) {
            setGenre(res.body.categories.items)
        }, function (error) {
            console.log(error)
        })
    }, [spotifyApi, showGenre, genre, searchField])

    return (
        <div className="p-6 flex flex-col justify-center space-y-2" >
            <h2 className="title">
                Genres
            </h2>
            <div className=" flex flex-wrap justify-center algin-center gap-1.5 ">
                {
                    genre.slice(0, showGenre ? 20 : 6).map((val) => (
                        <div className="tags" key={val.id} onClick={() => { setSearchField(val.name) }}>
                            {val.name}
                        </div>
                    ))
                }
            </div>
            <div onClick={() => setShowGenre(!showGenre)}
                className="tags flex justify-center items-center mx-2" >
                <span>
                    {showGenre ? "Hide" : "View all"}
                </span>
            </div>
        </div >
    );
};

export default Genres;
