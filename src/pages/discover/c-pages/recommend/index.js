import React, { memo } from 'react';

import TopBanners from './c-comps/top-banner';
import HotRecommend from './c-comps/hot-recommend';
import NewDisc from './c-comps/new-disc';
import Ranking from './c-comps/ranking';

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

export default memo(function Recommend() {

  return (
    <RecommendWraper>
      <TopBanners />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewDisc />
          <Ranking />
        </RecommendLeft>

        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  )
})
