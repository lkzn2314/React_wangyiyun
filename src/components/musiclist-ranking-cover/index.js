import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
    changeCurrentIndexAction,
} from '@/pages/discover/c-pages/musiclist/store/actionCreators';

import { formatImgSize } from '@/utils/format';

import { CoverWrapper } from './style';

export default memo(function MusiclistRankingCover(props) {
    const { info, index } = props;

    const dispatch = useDispatch();
    const { currentIndex } = useSelector(state => ({
        currentIndex: state.getIn(['musiclist', 'currentIndex'])
    }), shallowEqual);

    const changeRankingClick = index => {
        dispatch(changeCurrentIndexAction(index));
    };

    return (
        <CoverWrapper className={currentIndex === index ? "active" : " "} onClick={() => changeRankingClick(index)}>
            <img src={formatImgSize(info?.coverImgUrl, 40)} alt='' />
            <div>
                <div className="name">{info?.name}</div>
                <div className="text">{info?.updateFrequency}</div>
            </div>
        </CoverWrapper>
    )
})
