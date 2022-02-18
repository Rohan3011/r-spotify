import SpotifyWebApi from 'spotify-web-api-node';

const scope = [
    "user-read-email",
    "playlist-read-private",
    "user-read-email,streaming",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-follow-read"
].join(",");


const params = {
    scope: scope,

};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + queryParamString.toString();


export { LOGIN_URL };