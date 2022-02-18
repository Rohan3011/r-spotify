import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Genres from "./right/Genres";
import Header from "./right/Header";
import RecentlyPlayed from "./right/RecentlyPlayed";

const RightBar = ({ spotifyApi }) => {

    const { data: session } = useSession();
    const { accessToken } = session;
    const [recentlyPlayed, setRecentlyPlayed] = useState([])

    // Recently played songs...
    useEffect(() => {
        if (!accessToken)
            return
        spotifyApi.getMyRecentlyPlayedTracks()
            // .then((res) => setRecentlyPlayed(res
            .then((res) => setRecentlyPlayed(res.body.items.map(({ track }) => {
                return {
                    id: track.id,
                    title: track.name,
                    artist: track.artists[0].name,
                    uri: track.uri,
                    image: track.album.images[0].url,
                }
            })
            ))
    }, [accessToken])


    return (
        <div className="hidden xl:block grow p-4 mx-4 space-y-6">
            <Header />
            <RecentlyPlayed recentlyPlayed={recentlyPlayed} />
            <Genres />
        </div>
    )
}
export default RightBar;
