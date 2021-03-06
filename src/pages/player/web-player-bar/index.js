import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Slider, message, Tooltip } from 'antd';

import PlaylistPanel from '../web-player-panel';

import {
  changeSequenceAction,
  changeMusicAction,
  changeLyricItemIndexAction
} from '../store/actionCreators';

import {
  formatImgSize,
  formatDate,
  getSongPlay
} from '@/utils/format';

import {
  WebPlayerBarWrapper,
  Control,
  PlayInfo,
  Operator,
  LockStyle
} from './style';

export default memo(function WebPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loopTitle, setLoopTitle] = useState('循环');
  const [isLyricShow, setIsLyricShow] = useState(false);
  const [isShowBar, setIsShowBar] = useState(false);
  const [isFixedPostion, setIsFixedPosition] = useState(true);
  const [isShowPanel, setIsShowPanel] = useState(false);
  const [isShowVolumeSlider, setIsShowVolumeSlider] = useState(false);
  const [volumeValue, setVolumeValue] = useState(50);

  const dispatch = useDispatch();
  const { currentSong, playList, sequence, lyric, lyricItemIndex } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong']),
    playList: state.getIn(['player', 'playList']),
    sequence: state.getIn(['player', 'sequence']),
    lyric: state.getIn(['player', 'lyric']),
    lyricItemIndex: state.getIn(['player', 'lyricItemIndex'])
  }), shallowEqual);

  const audioRef = useRef();

  // 监听鼠标事件
  useEffect(() => {
    window.addEventListener('mousemove', function (e) {
      e.clientY > 640 ? setIsShowBar(true) : setIsShowBar(false);
    })
  }, [isShowBar])

  useEffect(() => {
    audioRef.current.src = getSongPlay(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }, err => {
      setIsPlaying(false)
    });
  }, [currentSong]);

  useEffect(() => {
    audioRef.current.volume = 0.5;
  }, [])

  const picUrl = currentSong.al?.picUrl || 'http://s4.music.126.net/style/web2/img/default/default_album.jpg?limit=34x34';
  const singer = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const allTime = currentSong.dt || 0;

  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play().then(res => {

    }, err => {
      message.info({
        key: 'lyric',
        content: '对不起，该歌曲没有版权'
      })
    });
    setIsPlaying(!isPlaying);
  };

  const changeMusic = tag => {
    dispatch(changeMusicAction(tag));
  };

  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / allTime) * 100);
    };

    // 根据时间获得当前歌词
    let currentLyricIndex = 0;
    for (let i in lyric) {
      let lyricItem = lyric[i];
      if (e.target.currentTime * 1000 <= lyricItem.time) {
        currentLyricIndex = i - 1;
        break;
      }
    }
    if (lyricItemIndex !== currentLyricIndex) {
      dispatch(changeLyricItemIndexAction(currentLyricIndex));
      if (!lyric || !lyric[currentLyricIndex]?.content) return;
      message.open({
        key: 'lyric',
        className: 'message-lyric',
        duration: 0,
        content: lyric[currentLyricIndex]?.content,
        style: { display: isLyricShow ? 'block' : 'none' }
      })
    }
  };

  const handleMusicEnd = () => {
    if (sequence === 2) { // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeMusicAction(1));
    }
  };

  const sliderChange = useCallback((value) => {
    setProgress(value);
    setCurrentTime(value / 100 * allTime);
    setIsChanging(true);
  }, [allTime]);

  const sliderAfterChange = useCallback((value) => {
    audioRef.current.currentTime = value / 100 * allTime / 1000;
    setIsChanging(false);
  }, [allTime]);

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    if (currentSequence === 0) setLoopTitle('循环');
    if (currentSequence === 1) setLoopTitle('随机');
    if (currentSequence === 2) setLoopTitle('单曲循环');
    dispatch(changeSequenceAction(currentSequence));
  };

  const changeLyricShow = () => {
    setIsLyricShow(!isLyricShow);
    if (isLyricShow) {
      message.destroy('lyric');
    }
  };
  // 是否固定播放器
  const changeLock = () => {
    setIsFixedPosition(!isFixedPostion);
  }

  // 歌单面板事件
  const changShowPanel = () => {
    setIsShowPanel(!isShowPanel);
    if (!isFixedPostion) {
      setIsFixedPosition(true);
    }
  }

  //音量按钮
  const changeVolumnClick = () => {
    setIsShowVolumeSlider(!isShowVolumeSlider)
  }

  const volumeValueChange = value => {
    setVolumeValue(value);
    audioRef.current.volume = 0.01 * value;
  }

  return (
    <WebPlayerBarWrapper className={isFixedPostion ? "playbar_sprite fixed-position" : "playbar_sprite"} isShowBar={isShowBar}>
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <div className="prev playbar_sprite" onClick={e => changeMusic(-1)} />
          <div className="play playbar_sprite" onClick={e => playMusic()} />
          <div className="next playbar_sprite" onClick={e => changeMusic(1)} />
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
              <Slider tooltipVisible={false} value={progress} onChange={value => sliderChange(value)}
                onAfterChange={value => sliderAfterChange(value)} />
              <span className="time">
                <span className="now-time">{formatDate(Math.floor(currentTime), 'mm:ss')}</span>
                <span className="divider">/</span>
                <span className="all-time">{formatDate(allTime, 'mm:ss')}</span>
              </span>
            </div>
          </div>
        </PlayInfo>

        <Operator sequence={sequence} volumeValue={volumeValue}>
          <div className="left">
            <Tooltip title="歌词" color='#191919'>
              <button className="btn lyric playbar_new" onClick={() => changeLyricShow()} />
            </Tooltip>
            <button className="btn favor playbar_sprite"/>
            <button className="btn share playbar_sprite"/>
          </div>
          <div className="right" >
            <button className="btn volume playbar_sprite" onClick={() => changeVolumnClick()} />
              { isShowVolumeSlider && <Slider className="playbar_sprite"
                  value={volumeValue}
                  tooltipVisible={false}
                  vertical
                  onChange={value => volumeValueChange(value)}
                  /> 
              }
            <Tooltip title={loopTitle} color='#191919' mouseLeaveDelay={0}>
              <button className="btn loop playbar_sprite" onClick={() => changeSequence()} />
            </Tooltip>
            <Tooltip title="播放列表" color='#191919' mouseEnterDelay={0.5}>
              <button className="btn playlist playbar_sprite" onClick={() => changShowPanel()}>{playList?.length}</button>
            </Tooltip>
          </div>
        </Operator>
      </div>

      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)}
        onEnded={e => handleMusicEnd()} />

      <LockStyle className="playbar_sprite" isFixedPostion={isFixedPostion} >
        <i className="lock playbar_sprite" onClick={() => changeLock()} />
      </LockStyle>

      {isShowPanel && <PlaylistPanel />}
    </WebPlayerBarWrapper >
  )
})
