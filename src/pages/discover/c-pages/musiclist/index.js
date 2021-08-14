import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MusicRankings from './c-comps/ranking-list';
import RankingInfo from './c-comps/ranking-header';
import RankingDetail from './c-comps/ranking-detail';
import Comment from './c-comps/comment';

import {
    getToplistAction
} from './store/actionCreators';

import {
    MusiclistWrapper,
    MusiclistLeft,
    MusiclistRight
} from './style';

export default memo(function MusicList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToplistAction())
    }, [dispatch])

    return (
        <MusiclistWrapper className="wrap-v2">
            <MusiclistLeft>
                <MusicRankings />
            </MusiclistLeft>

            <MusiclistRight>
                <RankingInfo />
                <RankingDetail />
                <Comment />
            </MusiclistRight>
        </MusiclistWrapper>
    )
})
