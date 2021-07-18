import * as actionTypes from './constants';

const initialState = {
  banners: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNERS:
      return state.set('banners', action.banners)
    default:
      return state
  }
}

export default reducer;
