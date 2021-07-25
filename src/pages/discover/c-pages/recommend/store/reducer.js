import { Map } from 'immutable';
import * as actionTypes from './constants';

const initialState = Map({
  banners: [],
  hotRecommends: [],
  newDiscs: [],
  upRankings: {},
  newRankings: {},
  originRankings: {}
})

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNERS:
      return state.set('banners', action.banners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    case actionTypes.CHANGE_NEW_DISC:
      return state.set('newDiscs', action.newDiscs)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRankings', action.upRankings)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRankings', action.newRankings)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRankings', action.originRankings)
    default:
      return state
  }
}

export default reducer;
