import * as actionTypes from './constants';

import { getAllPlaylist } from '@/network/discover';

const changeAllPlaylistAction = playlists => ({
    type: actionTypes.CHANGE_ALL_PLAYLIST,
    allPlaylist: playlists
})

const changeTotalAction = total => ({
    type: actionTypes.CHANGE_TOTAL,
    total
})

export const getAllPlaylistAction = (offset, limit) => {
    return dispatch => {
        getAllPlaylist(offset, limit).then(res => {
            console.log(res);
            dispatch(changeAllPlaylistAction(res?.playlists));
            dispatch(changeTotalAction(res?.total))
        })
    }
}