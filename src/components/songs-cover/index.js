import React, { memo, useCallback } from 'react';

import { formatImgSize } from '@/utils/format';
import { SongsCoverWrapper } from './style';

export default memo(function SongsCover(props) {
    const { info } = props;

    const formatCount = useCallback((count) => {
        if (count < 100000) return count;
        return Math.floor(count / 10000) + '万'
    }, [])

    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={formatImgSize(info.picUrl, 140)} alt={info.name} />
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="erji sprite_icon" />
                            {formatCount(info.playCount)}
                        </span>
                        <i className="play sprite_icon" />
                    </div>
                </div>
            </div>
            <div className="cover-bottom">{info.name}</div>
            <div className="cover-source"></div>

        </SongsCoverWrapper>
    )
})
