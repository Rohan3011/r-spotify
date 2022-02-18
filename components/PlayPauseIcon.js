import React from 'react';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { playingTrackState, playState } from '../atoms/playerAtom';

const PlayPauseIcon = ({ track, className }) => {
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
            {track.uri === playingTrack.uri && play ?
                <BsFillPauseFill className={`play-pause ${className}`} /> :
                <BsFillPlayFill className={`play-pause ${className}`} />
            }
        </div>
    )
};

export default PlayPauseIcon;
