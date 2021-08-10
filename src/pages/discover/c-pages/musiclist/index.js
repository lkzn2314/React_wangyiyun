import React, { memo } from 'react';

import {
    MusiclistWrapper,
    MusiclistLeft,
    MusiclistRight
} from './style';

export default memo(function MusicList() {
    return (
        <MusiclistWrapper className="wrap-v2">
            <MusiclistLeft>
                我是榜单

            </MusiclistLeft>

            <MusiclistRight></MusiclistRight>
        </MusiclistWrapper>
    )
})
