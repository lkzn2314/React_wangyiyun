import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCurrentSongAction } from '@/pages/player/store/actionCreators';
import { changeCurrentIndexAction } from '@/pages/discover/c-pages/musiclist/store/actionCreators';

import { formatImgSize } from '@/utils/format';
import { TopRankingWrapper } from './style';

function TopRanking(props) {
  const { info, currentIndex, history } = props;
  const dispatch = useDispatch();

  const playMusic = songId => {
    dispatch(getCurrentSongAction(songId));
  }

  const goToMusiclist = index => {
    history.push('/discover/musiclist');
    dispatch(changeCurrentIndexAction(index));
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={formatImgSize(info?.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover"> </a>
        </div>
        <div className="info">
          <a href="/todo">{info?.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>

      <div className="list">
        {
          info?.tracks?.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={() => playMusic(item.id)} />
                    <button className="btn sprite_icon2 addto" />
                    <button className="btn sprite_02 favor" />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      {
        info?.tracks?.length ?
          <div className="footer">
            <div className="more" onClick={() => goToMusiclist(currentIndex)}>查看全部 &gt;</div>
          </div> : null
      }
    </TopRankingWrapper>
  )
}
export default withRouter(memo(TopRanking))
