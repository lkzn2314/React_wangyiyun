import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ThemeHeaderRec from '@/components/theme-header-rec';
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
      <ThemeHeaderRec title="榜单" />
      <div className="ranking-list">
        <TopRanking info={upRankings} />
        <TopRanking info={newRankings} />
        <TopRanking info={originRankings} />
      </div>
    </RankingWrapper>
  )
})
