import React, { memo } from 'react';

import MusicRankings from './c-comps/ranking-list';
import RankingInfo from './c-comps/ranking-header';

import {
    MusiclistWrapper,
    MusiclistLeft,
    MusiclistRight
} from './style';

export default memo(function MusicList() {
    return (
        <MusiclistWrapper className="wrap-v2">
            <MusiclistLeft>
                <MusicRankings />
            </MusiclistLeft>

            <MusiclistRight>
                <RankingInfo />
            </MusiclistRight>
        </MusiclistWrapper>
    )
})
