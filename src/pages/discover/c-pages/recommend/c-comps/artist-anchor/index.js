import React, { memo, useEffect, useState } from 'react';

import ArtistAndAnchorCover from '@/components/artist-anchor-cover';

import { getArtists } from '@/network/discover';
import { hotAnchors } from '@/network/local-data';

import { ArtistWrapper, AnchorWrapper } from './style';

export default memo(function ArtistAnchor() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        getArtists(5).then(res => {
            setArtists(res.artists)
        })
    }, [])

    return (
        <>
            <ArtistWrapper>
                <div className="artist-title">
                    <span className="title-name">入驻歌手</span>
                    <span>查看全部 &gt;</span>
                </div>
                {
                    artists?.map(item => {
                        return (
                            <div key={item.id} className="artist-item">
                                <ArtistAndAnchorCover info={item} imgSize={62} nameBold={'name'} />
                            </div>
                        )
                    })
                }
                <div className="apply">申请成为网易音乐人</div>
            </ArtistWrapper>

            <AnchorWrapper>
                <div className="artist-title">
                    <span className="title-name">热门主播</span>
                </div>
                {
                    hotAnchors.map(item => {
                        return (
                            <div key={item.name} className="anchor-item">
                                <ArtistAndAnchorCover info={item} imgSize={40} />
                            </div>
                        )
                    })
                }
            </AnchorWrapper>
        </>
    )
})
