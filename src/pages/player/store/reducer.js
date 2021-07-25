import { Map } from 'immutable';
import * as actionTypes from './constants';

const initialState = Map({
  currentSong: {}
})

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    default:
      return state;
  }
}


