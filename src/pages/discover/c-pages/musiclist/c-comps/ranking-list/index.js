import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MusiclistRankingCover from '@/components/musiclist-ranking-cover';

import {
    getRankingDetailAction
} from '../../store/actionCreators';

import { MusicRankingWrapper } from './style';

export default memo(function MusicRankings() {

    const dispatch = useDispatch();
    const { toplist, currentIndex } = useSelector(state => ({
        toplist: state.getIn(['musiclist', 'toplist']),
        currentIndex: state.getIn(['musiclist', 'currentIndex'])
    }))

    useEffect(() => {
        const id = toplist && toplist[currentIndex]?.id
        dispatch(getRankingDetailAction(id))
    }, [dispatch, toplist, currentIndex])

    return (
        <MusicRankingWrapper>
            {
                toplist?.length ?
                    (<h2 className="special title">
                        云音乐特色榜
                    </h2>) : null
            }
            {
                toplist?.slice(0, 4).map((item, index) => {
                    return (
                        <MusiclistRankingCover key={item.id} info={item} index={index} />
                    )
                })
            }
            {
                toplist?.length ?
                    (<h2 className="media title">
                        全球媒体榜
                    </h2>) : null
            }
            {
                toplist?.slice(4).map((item, index) => {
                    return (
                        <MusiclistRankingCover key={item.id} info={item} index={index + 4} />
                    )
                })
            }
        </MusicRankingWrapper>
    )
})
