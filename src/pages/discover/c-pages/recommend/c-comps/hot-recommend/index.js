import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import ThemeHeaderRec from '@/components/theme-header-rec';
import SongsCover from '@/components/songs-cover';

import { getHotRecommendsAction } from '../../store/actionCreators';
import { HotRecommendWrapper } from './style';

export default memo(function HotRecommend() {
  //state

  //redux hooks
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual);

  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRec title="热门推荐" tabs={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends?.map(item => {
            return (
              <SongsCover key={item.id} info={item} />
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
