import React, { memo } from 'react';

import { ArtistWrapper } from './style';

export default memo(function Artist() {
    return (
        <ArtistWrapper className="wrap-v2">
            <div className="left">
                left
            </div>
            <div className="right">
                right
            </div>
        </ArtistWrapper>
    )
})
