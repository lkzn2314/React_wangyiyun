import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { formatDate } from '@/utils/format';

import { PlayListWrapper } from './style';

export default memo(function PannelBodyLeft() {
  const { playList, currentSongIndex } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"])
  }), shallowEqual);


  return (
    <PlayListWrapper>
      {
        playList?.map((item, index) => {
          return (
            <div key={item.id} className={currentSongIndex === index ? "play-item active" : "play-item"}>
              <div className="left">{item.name}</div>
              <div className="right">
                <span className="singer">{item.ar[0].name}</span>
                <span className="duration">{formatDate(item.dt, 'mm:ss')}</span>
                <span className="playlist_sprite link"></span>
              </div>
            </div>
          )
        })
      }
    </PlayListWrapper>
  )
})
