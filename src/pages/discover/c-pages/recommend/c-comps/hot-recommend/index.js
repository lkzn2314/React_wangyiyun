import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import HeaderLine from '@/components/header-line';
import SongsCover from '@/components/songs-cover';

import { getHotRecommendsAction } from '../../store/actionCreators';
import { getHotPlaylistCategoryAction } from '../../../playlist/store/actionCreators';
import { HotRecommendWrapper } from './style';

export default memo(function HotRecommend() {
  //state

  //redux hooks
  const dispatch = useDispatch();
  const { hotRecommends, hotPlaylistCategory } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    hotPlaylistCategory: state.getIn(['playlist', 'hotPlaylistCategory'])
  }), shallowEqual);

  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(8));
    dispatch(getHotPlaylistCategoryAction());
  }, [dispatch]);

  const HeaderLineTabs = hotPlaylistCategory?.slice(0, 5);

  return (
    <HotRecommendWrapper>
      <HeaderLine title="热门推荐" tabs={HeaderLineTabs} to='/discover/playlist' />
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
