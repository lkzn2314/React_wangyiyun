import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducers } from '../pages/discover/c-pages/recommend/store';

const reducer = combineReducers({
    recommend: recommendReducers
})

export default reducer;