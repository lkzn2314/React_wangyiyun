import { Map } from 'immutable';
import * as actionTypes from './constants';

const initialState = Map({
  banners: [],
  hotRecommends: []
})

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNERS:
      return state.set('banners', action.banners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    default:
      return state
  }
}

export default reducer;
