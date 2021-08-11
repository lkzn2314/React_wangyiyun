import React, { memo, useEffect, useState } from 'react';

import MusiclistRankingCover from '@/components/musiclist-ranking-cover';

import { getToplist } from '@/network/discover';

import { MusicRankingWrapper } from './style';

export default memo(function MusicRankings() {
    const [toplists, setToplists] = useState([]);

    useEffect(() => {
        getToplist().then(res => {
            if (res.code === 200) {
                setToplists(res.list)
            }
        })
    }, [])

    return (
        <MusicRankingWrapper>
            {
                toplists.length ?
                    (<h2 className="special title">
                        云音乐特色榜
                    </h2>) : null
            }
            {
                toplists?.slice(0, 4).map((item, index) => {
                    return (
                        <MusiclistRankingCover key={item.id} info={item} index={index} />
                    )
                })
            }
            {
                toplists.length ?
                    (<h2 className="media title">
                        全球媒体榜
                    </h2>) : null
            }
            {
                toplists?.slice(4).map((item, index) => {
                    return (
                        <MusiclistRankingCover key={item.id} info={item} index={index+4} />
                    )
                })
            }
        </MusicRankingWrapper>
    )
})
