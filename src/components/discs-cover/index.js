import React, { memo } from 'react';

import { formatImgSize } from '@/utils/format';

import { DiscsCoverWrapper } from './style';

export default memo(function DiscsCover(props) {
    const { info } = props;

    return (
        <DiscsCoverWrapper>
            <div className="cover">
                <img src={formatImgSize(info.picUrl, 100)} alt={info.name} />
                <i className="play sprite_icon" />
                <i className="cover2 sprite_cover" />
            </div>
            <div className="covber-bottom">
                <div className="disc-name text-nowrap">{info.name}</div>
                <div className="disc-singer text-nowrap">{info.artist.name}</div>
            </div>
        </DiscsCoverWrapper>
    )
})
