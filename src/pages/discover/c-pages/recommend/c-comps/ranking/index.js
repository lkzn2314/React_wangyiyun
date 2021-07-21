import React, { memo } from 'react';

import ThemeHeaderRec from '@/components/theme-header-rec';

import { RankingWrapper } from './style';

export default memo(function Ranking() {
    return (
        <RankingWrapper>
            <ThemeHeaderRec title="榜单" />
        </RankingWrapper>
    )
})
