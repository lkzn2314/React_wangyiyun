import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducers } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducers } from '../pages/player/store';
import { reducer as musiclistReducers } from '../pages/discover/c-pages/musiclist/store';
import { reducer as playlistReducers } from '../pages/discover/c-pages/playlist/store';
import { reducer as discReducers } from '../pages/discover/c-pages/disc/store';

const reducer = combineReducers({
    recommend: recommendReducers,
    player: playerReducers,
    musiclist: musiclistReducers,
    playlist: playlistReducers,
    disc: discReducers
})

export default reducer;