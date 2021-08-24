import React, { memo } from 'react';

import HotDisc from './c-comps/hot-disc';
import AllDisc from './c-comps/all-disc';

import { DiscWrapper } from './style';

export default memo(function Disc() {
    return (
        <DiscWrapper className="wrap-v2">
            <HotDisc />
            <AllDisc />
        </DiscWrapper>
    )
})
