import { Map } from 'immutable';
import * as actionTypes from './constants';

const initialState = Map({
    allDiscs: [],
    total: 0
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_NEW_DISCS:
            return state.set('allDiscs', action.allDiscs);
        case actionTypes.CHANGE_TOTAL:
            return state.set('total', action.total);
        default:
            return state;
    }
}