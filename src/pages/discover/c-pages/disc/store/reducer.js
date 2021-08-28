import { Map } from 'immutable';
import * as actionTypes from './constants';

const initialState = Map({
    allDiscs: [],
    total: 0,
    currentArea: 'ALL'
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_NEW_DISCS:
            return state.set('allDiscs', action.allDiscs);
        case actionTypes.CHANGE_TOTAL:
            return state.set('total', action.total);
        case actionTypes.CHANGE_CURRENT_AREA:
            return state.set('currentArea', action.currentArea);
        default:
            return state;
    }
}