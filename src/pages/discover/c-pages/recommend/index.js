import React, { memo } from 'react';

import TopBanners from './c-comps/top-banner';

import { RecommendWraper } from './style';

export default memo(function Recommend() {

    return (
        <RecommendWraper>
            <TopBanners />
        </RecommendWraper>
    )
})
