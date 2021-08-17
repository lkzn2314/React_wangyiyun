import { Map } from "immutable";
import * as actionTypes from './constants';

const initialState = Map({
    allPlaylist: [],
    total: 0
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_ALL_PLAYLIST:
            return state.set('allPlaylist', action.allPlaylist);
        case actionTypes.CHANGE_TOTAL:
            return state.set('total', action.total);
        default:
            return state;
    }
}