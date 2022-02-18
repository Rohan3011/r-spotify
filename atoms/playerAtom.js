import { atom } from "recoil"

export const playState = atom({
    key: "playState",
    default: false,
})

export const playingTrackState = atom({
    key: "playingTrackState",
    default: "",
})

export const trackTypeState = atom({
    key: "trackTypeState",
    default: "Tracks",
})

export const searchFieldState = atom({
    key: "searchFieldState",
    default: ""
})