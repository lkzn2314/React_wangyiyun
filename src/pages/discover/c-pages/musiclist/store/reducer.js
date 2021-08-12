import { Map } from 'immutable';
import * as actionTypes from './constants';

const initialState = Map({
    toplist: []
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOPLIST:
            return state.set('toplist', action.toplist);
        default:
            return state;
    }
}