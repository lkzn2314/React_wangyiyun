import * as actionTypes from './constants';
import {
    getToplist,
    getRankings,
    getPlaylistComment
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

const changePlaylistCommentAction = playlistComment => ({
    type: actionTypes.CHANGE_PLAYLIST_COMMENT,
    playlistComment
})

export const getToplistAction = () => {
    return dispatch => {
        getToplist().then(res => {
            dispatch(changeToplistAction(res?.list))
        })
    }
}

export const getRankingDetailAction = playlistId => {
    return dispatch => {
        getRankings(playlistId).then(res => {
            dispatch(changeRankingDetailAction(res?.playlist?.tracks));
        })
    }
}

export const getPlaylistCommentAction = playlistId => {
    return dispatch => {
        getPlaylistComment(playlistId).then(res => {
            dispatch(changePlaylistCommentAction(res))
        })
    }
}


