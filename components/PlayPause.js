import React from 'react';
import { useRecoilState } from 'recoil';
import { playingTrackState, playState } from '../atoms/playerAtom';

const PlayPause = ({ track, children }) => {
    const [play, setPlay] = useRecoilState(playState)
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState)

    const chooseTrack = (track) => {
        setPlayingTrack(track)
        setPlay(true)
    }
    const handlePlay = () => {
        if (track.uri === playingTrack.uri)
            setPlay(!play)
        else
            chooseTrack(track)
    }
    return (
        <div onClick={handlePlay}>
            {children}
        </div>
    )
};

export default PlayPause;
