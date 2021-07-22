import { Map } from 'immutable';
import * as actionTypes from './constants';

const initialState = Map({
  banners: [],
  hotRecommends: [],
  newDiscs: []
})

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNERS:
      return state.set('banners', action.banners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_DISC:
      return state.set('newDiscs', action.newDiscs)
    default:
      return state
  }
}

export default reducer;
