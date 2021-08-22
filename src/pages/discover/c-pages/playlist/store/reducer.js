import { Map } from "immutable";
import * as actionTypes from './constants';

const initialState = Map({
    playlistDetail: [],
    total: 0,
    allPlaylistCategory: [],
    hotPlaylistCategory: [],
    currentCat: '全部'
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_ALL_PLAYLIST:
            return state.set('playlistDetail', action.playlistDetail);
        case actionTypes.CHANGE_TOTAL:
            return state.set('total', action.total);
        case actionTypes.CHANGE_ALL_PLAYLIST_CATEGORY:
            return state.set('allPlaylistCategory', action.allPlaylistCategory);
        case actionTypes.CHANGE_HOT_PLAYLIST_CATEGORY:
            return state.set('hotPlaylistCategory', action.hotPlaylistCategory);
        case actionTypes.CHANGE_CURRENT_CAT:
            return state.set('currentCat', action.currentCat);
        default:
            return state;
    }
}