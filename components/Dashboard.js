
import { useRecoilState } from 'recoil';
import SpotifyWebApi from 'spotify-web-api-node';
import { playingTrackState, playState } from '../atoms/playerAtom';
import Content from './Content';
import MusicPlayer from './MusicPlayer';
import RightBar from './RightBar';
import Sidebar from './Sidebar';


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,

})

const Dashboard = () => {

    return (
        <main className='flex'>
            <Sidebar />
            <Content
                spotifyApi={spotifyApi}
            />
            <RightBar
                spotifyApi={spotifyApi}
            />
            <MusicPlayer />
        </main>
    );
};

export default Dashboard;
