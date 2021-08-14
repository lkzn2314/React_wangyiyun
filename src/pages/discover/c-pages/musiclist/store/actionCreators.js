import * as actionTypes from './constants';
import {
    getToplist,
    getRankings
} from '@/network/discover';

const changeToplistAction = toplist => ({
    type: actionTypes.CHANGE_TOPLIST,
    toplist
})

export const changeCurrentIndexAction = index => ({
    type: actionTypes.CHANGE_CURRENT_INDEX,
    currentIndex: index
})

const changeRankingDetailAction = playlist => ({
    type: actionTypes.CHANGE_PLAYLIST,
    playlist
})

export const getToplistAction = () => {
    return dispatch => {
        getToplist().then(res => {
            dispatch(changeToplistAction(res?.list))
        })
    }
}

export const getRankingDetailAction = id => {
    return dispatch => {
        getRankings(id).then(res => {
            dispatch(changeRankingDetailAction(res?.playlist?.tracks));
        })
    }
}


