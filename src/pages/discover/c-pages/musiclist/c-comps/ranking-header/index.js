import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { getPlaylistDetailAction } from '@/pages/player/store/actionCreators';

import {
    formatImgSize,
    formatDate
} from '@/utils/format';

import { RankingInfoWrapper } from './style';

export default memo(function RankingInfo() {

    const dispatch = useDispatch();
    const { toplist, currentIndex } = useSelector(state => ({
        toplist: state.getIn(['musiclist', 'toplist']),
        currentIndex: state.getIn(['musiclist', 'currentIndex'])
    }), shallowEqual);

    const toplistDetail = toplist && toplist[currentIndex];

    const playRankingDetail = () => {
        const playlistId = toplistDetail.id;
        dispatch(getPlaylistDetailAction(playlistId));
    }

    return (
        <>
            {
                toplist.length ?
                    (<RankingInfoWrapper>
                        <img src={formatImgSize(toplistDetail?.coverImgUrl, 150)} alt="" />
                        <div className="info">
                            <h2 className="name">{toplistDetail?.name}</h2>

                            <div className="update-time">
                                <i className="clock sprite_icon2" />
                                <span>
                                    最近更新：{formatDate(toplistDetail?.updateTime, 'MM月dd日')}
                                    <span className="updateFrequency">（{toplistDetail?.updateFrequency}）</span>
                                </span>
                            </div>

                            <div className="operation">
                                <div className="first">
                                    <div className="play sprite_button" onClick={() => playRankingDetail()}>播放</div>
                                    <div className="addtoPlaylist sprite_button"></div>
                                </div>
                                <div className="collect btn sprite_button">({toplistDetail?.subscribedCount})</div>
                                <div className="share btn sprite_button">无数据</div>
                                <div className="download btn sprite_button">下载</div>
                                <div className="comment btn sprite_button">无数据</div>
                            </div>
                        </div>
                    </RankingInfoWrapper>) : null
            }
        </>
    )
})
