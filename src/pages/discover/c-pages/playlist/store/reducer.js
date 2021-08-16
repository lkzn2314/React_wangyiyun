import { Map } from "immutable";
import * as actionTypes from './constants';

const initialState = Map({
    allPlaylist: []
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_ALL_PLAYLIST:
            return state.set('allPlaylist', action.allPlaylist);
        default:
            return state;
    }
}