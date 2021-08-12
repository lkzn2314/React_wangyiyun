import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducers } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducers } from '../pages/player/store';
import { reducer as musiclistReducers } from '../pages/discover/c-pages/musiclist/store';

const reducer = combineReducers({
    recommend: recommendReducers,
    player: playerReducers,
    musiclist: musiclistReducers
})

export default reducer;