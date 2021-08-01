import { Map } from 'immutable';
import * as actionTypes from './constants';

const initialState = Map({
  currentSong: {},
  playList: [],
  currentSongIndex: 0,
  sequence: 0,    //0 循环  1 随机  2 单曲
  lyric: [],
  lyricItemIndex: 0
})

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.currentSongIndex);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set('sequence', action.sequence);
    case actionTypes.CHANGE_LYRIC:
      return state.set('lyric', action.lyric);
    case actionTypes.CHANGE_LYRIC_ITEM_INDEX:
      return state.set('lyricItemIndex', action.lyricItemIndex);
    default:
      return state;
  }
}


