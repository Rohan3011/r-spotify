
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { trackTypeState, searchFieldState } from '../atoms/playerAtom';
import Cards from './body/Cards';
import SearchBar from './body/SearchBar';
import SongList from './body/SongList';

const Content = ({ spotifyApi }) => {
    const { data: session } = useSession();
    const { accessToken } = session;
    const [searchField, setSearchField] = useRecoilState(searchFieldState);
    const [newReleases, setNewReleases] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [trackType, setTrackType] = useRecoilState(trackTypeState)
    useEffect(() => {
        if (!accessToken)
            return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken, spotifyApi])

    // Searching...
    useEffect(() => {
        if (!searchField)
            return setSearchResults([])
        if (!accessToken)
            return
        spotifyApi.searchTracks(searchField)
            .then((res) => setSearchResults(res.body.tracks.items.map((track) => {
                return {
                    id: track.id,
                    title: track.name,
                    artist: track.artists[0].name,
                    uri: track.uri,
                    image: track.album.images[0].url,
                    popularity: track.popularity

                }
            })
            ))
        setTrackType("Results")
    }, [searchField, accessToken, trackType, spotifyApi, setTrackType])


    // new Releases...
    useEffect(() => {
        if (!accessToken || searchField) return
        spotifyApi.getNewReleases({ offset: 2, country: 'IN' })
            .then((res) => setNewReleases(res.body.albums.items.map((track) => {
                return {
                    id: track.id,
                    title: track.name,
                    artist: track.artists[0].name,
                    uri: track.uri,
                    image: track.images[0].url,
                    popularity: track.popularity
                }
            })
            ))
        setTrackType("Tracks")
    }, [setNewReleases, accessToken, trackType, searchField, spotifyApi, setTrackType])



    const handleCards = () => {
        if (searchResults.length === 0) {
            return newReleases
        }
        return searchResults
    }

    return (
        <section className=" ml-20 space-y-4 p-4 flex-grow md:max-w-5xl">
            <SearchBar
                searchField={searchField}
                setSearchField={setSearchField}
            />
            <Cards
                albums={handleCards().slice(0, 10)}
            />
            <SongList
                albums={handleCards().slice(10)}
                title={trackType}
            />
        </section>
    )
};

export default Content;
