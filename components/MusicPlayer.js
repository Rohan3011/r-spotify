import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib';
import { useRecoilState, useRecoilValue } from 'recoil'
import { playingTrackState, playState } from '../atoms/playerAtom'

const MusicPlayer = () => {
    const { data: session } = useSession();
    const { accessToken } = session;
    const [play, setPlay] = useRecoilState(playState)
    const playingTrack = useRecoilValue(playingTrackState)
    if (!accessToken) return null

    return (
        <div className='fixed bottom-0 left-0 z-50 flex justify-center w-full '>
            <SpotifyWebPlayer
                styles={{
                    activeColor: "#fff",
                    bgColor: "#181818",
                    color: "#fff",
                    loaderColor: "#fff",
                    sliderColor: "#1cb954",
                    trackArtistColor: "#ccc",
                    trackNameColor: "#fff",
                    height: "70px",
                    sliderTrackColor: "#535353",
                    sliderTrackBorderRadius: "4px",
                    sliderHandleColor: "#fff",
                    errorColor: "#fff",
                    fontColor: "white"
                }}
                token={accessToken}
                showSaveIcon
                callback={(state) => {
                    setPlay(state.isPlaying);
                }}
                play={play}
                uris={playingTrack ? [playingTrack.uri] : []}
                magnifySliderOnHover={true}
                autoPlay={true}
            />

        </div>
    )
}

export default MusicPlayer