import React, { memo } from 'react';

import { formatImgSize } from '@/utils/format';

import { ArtistAndAnchorWrapper } from './style';

export default memo(function ArtistAndAnchor(props) {
    const { info, imgSize, nameBold } = props
    const imgSizeTo = imgSize + 'px';

    return (
        <ArtistAndAnchorWrapper imgSizeTo={imgSizeTo} >
            <img src={formatImgSize(info?.picUrl, imgSize)} alt="" />
            <div className="info">
                <div className={nameBold}>{info?.name}</div>
                <div className="introduction text-nowrap">{(info.alias && info.alias[0]) || info.position}</div>
            </div>
        </ArtistAndAnchorWrapper>
    )
})
