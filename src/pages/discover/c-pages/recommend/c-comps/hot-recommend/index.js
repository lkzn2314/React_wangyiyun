import React, { memo } from 'react';

import ThemeHeaderRec from '@/components/theme-header-rec';

import { HotRecommendWrapper } from './style';

export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            <ThemeHeaderRec title="热门推荐" tabs={["华语", "流行", "摇滚", "民谣", "电子"]} />
        </HotRecommendWrapper>
    )
})
