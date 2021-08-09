import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getCurrentSongAction } from '@/pages/player/store/actionCreators';

import { formatDate } from '@/utils/format';

import { PlayListWrapper } from './style';

export default memo(function PannelBodyLeft() {

  const dispatch = useDispatch();
  const { playList, currentSongIndex } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"])
  }), shallowEqual);

  const changeMusic = item => {
    dispatch(getCurrentSongAction(item.id));
  }

  return (
    <PlayListWrapper>
      {
        playList?.length ? playList?.map((item, index) => {
          return (
            <div key={item.id} className={currentSongIndex === index ? "play-item active" : "play-item"} onClick={() => changeMusic(item)}>
              <div className="left">{item.name}</div>
              <div className="right">
                <span className="singer text-nowrap">{item.ar[0].name}</span>
                <span className="duration">{formatDate(item.dt, 'mm:ss')}</span>
                <span className="playlist_sprite link"></span>
              </div>
            </div>
          )
        }) :
          <div className="no-playlist">
            <div className="first">
              <i className="playlist_sprite" />
              你还没有添加任何歌曲
            </div>
            <div>去首页发现音乐，或在我的音乐收听自己收藏的歌单。</div>
          </div>
      }
    </PlayListWrapper>
  )
})
