import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderLine from '@/components/header-line';
import TopRanking from '@/components/top-ranking';

import { getRankingAction } from '../../store/actionCreators';

import { RankingWrapper } from './style';

export default memo(function Ranking() {

  const dispatch = useDispatch();
  const { upRankings, newRankings, originRankings } = useSelector(state => ({
    upRankings: state.getIn(['recommend', 'upRankings']),
    newRankings: state.getIn(['recommend', 'newRankings']),
    originRankings: state.getIn(['recommend', 'originRankings'])
  }))

  useEffect(() => {
    // 【飙升--新歌--原创】
    [19723756, 3779629, 2884035].map(index =>
      dispatch(getRankingAction(index))
    )
  }, [dispatch])

  return (
    <RankingWrapper>
      <HeaderLine title="榜单" to="/discover/musiclist" />
      <div className="ranking-list">
        <TopRanking info={upRankings} currentIndex={0} />
        <TopRanking info={newRankings} currentIndex={1} />
        <TopRanking info={originRankings} currentIndex={2} />
      </div>
    </RankingWrapper>
  )
})
