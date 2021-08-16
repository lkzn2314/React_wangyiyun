import * as actionTypes from './constants';

import { getAllPlaylist } from '@/network/discover';

const changeAllPlaylistAction = playlists => ({
    type: actionTypes.CHANGE_ALL_PLAYLIST,
    allPlaylist: playlists
})

export const getAllPlaylistAction = () => {
    return dispatch => {
        getAllPlaylist().then(res => {
            console.log(res);
            dispatch(changeAllPlaylistAction(res?.playlists));
        })
    }
}