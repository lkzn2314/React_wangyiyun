import * as actionTypes from './constants';

import { getSongDetail } from '@/network/player';

const changeCurrentSongAction = res => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: res.songs[0]
})

export const getCurrentSongAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then(res => {
            console.log(res);
            dispatch(changeCurrentSongAction(res))
        })
    }
}