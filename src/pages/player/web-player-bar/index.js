import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Slider } from 'antd';

import { getCurrentSongAction } from '../store/actionCreators';

import {
  formatImgSize,
  formatDate
} from '@/utils/format';

import {
  WebPlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function WebPlayerBar() {

  const dispatch = useDispatch();
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getCurrentSongAction(1861640530))
  }, [dispatch])

  const picUrl = currentSong.al && currentSong.al.picUrl;
  const singer = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const allTime = currentSong.dt || 0;

  return (
    <WebPlayerBarWrapper className="playbar_sprite">
      <div className="content wrap-v2">
        <Control>
          <div className="prev playbar_sprite" />
          <div className="play playbar_sprite" />
          <div className="next playbar_sprite" />
        </Control>

        <PlayInfo>
          <a href="#/" className="image" >
            <img src={formatImgSize(picUrl, 34)} alt="" />
          </a>
          <div className="info">
            <div className="song">
              <span>{currentSong.name || '未知歌曲'}</span>
              <span className="singer-name">{singer}</span>
              <i className="link playbar_sprite" />
              <a href="#/"> </a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} />
              <span className="time">
                <span className="now-time">2:00</span>
                <span className="divider">/</span>
                <span className="all-time">{formatDate(allTime, 'mm:ss')}</span>
              </span>
            </div>
          </div>
        </PlayInfo>

        <Operator>
          <div className="left">
            <button className="btn lyric playbar_new"></button>
            <button className="btn favor playbar_sprite"></button>
            <button className="btn share playbar_sprite"></button>
          </div>
          <div className="right" >
            <button className="btn volume playbar_sprite"></button>
            <button className="btn loop playbar_sprite"></button>
            <button className="btn playlist playbar_sprite"></button>
          </div>
        </Operator>
      </div>
    </WebPlayerBarWrapper>
  )
})
