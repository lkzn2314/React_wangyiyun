import React, { memo } from 'react';

import MusicRankings from './c-comps/music-rankings';

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

            <MusiclistRight></MusiclistRight>
        </MusiclistWrapper>
    )
})
