import { Map } from 'immutable';
import * as actionTypes from './constants';

const initialState = Map({
    toplist: [],
    currentIndex: 0,
    playlist: {},
    playlistComment: {}
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOPLIST:
            return state.set('toplist', action.toplist);
        case actionTypes.CHANGE_CURRENT_INDEX:
            return state.set('currentIndex', action.currentIndex);
        case actionTypes.CHANGE_PLAYLIST:
            return state.set('playlist', action.playlist);
        case actionTypes.CHANGE_PLAYLIST_COMMENT:
            return state.set('playlistComment', action.playlistComment);
        default:
            return state;
    }
}