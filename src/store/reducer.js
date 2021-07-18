import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducers } from '../views/discover/children/recommend/store';

const reducer = combineReducers({
    recommend: recommendReducers
})

export default reducer;