import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducers } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducers } from '../pages/player/store';

const reducer = combineReducers({
    recommend: recommendReducers,
    player: playerReducers
})

export default reducer;