import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getCurrentSongAction } from '@/pages/player/store/actionCreators';

import {
    formatDate,
    formatImgSize
} from '@/utils/format';

import {
    RankingDetailWrapper,
    RankingDetailBody
} from './style';

export default memo(function RankingDetail() {

    const dispatch = useDispatch();
    const { toplist, currentIndex, playlist } = useSelector(state => ({
        toplist: state.getIn(['musiclist', 'toplist']),
        currentIndex: state.getIn(['musiclist', 'currentIndex']),
        playlist: state.getIn(['musiclist', 'playlist'])
    }), shallowEqual);

    const toplistDetail = toplist && toplist[currentIndex];

    const playMusic = songId => {
        dispatch(getCurrentSongAction(songId));
    }

    return (
        <>
            {
                playlist?.length ?
                    (<RankingDetailWrapper>
                        <div className="head">
                            <div className="title">
                                歌曲列表
                                <span>{toplistDetail?.trackCount}首歌</span>
                            </div>
                            <div>播放：<i className="playcount">{toplistDetail?.playCount}</i>次</div>
                        </div>

                        <RankingDetailBody>
                            <table>
                                <thead>
                                    <tr className="thead-tr">
                                        <th className="index"></th>
                                        <th className="table-title">标题</th>
                                        <th className="duration">时长</th>
                                        <th className="songer">歌手</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        playlist.map((item, index) => {
                                            return (
                                                <tr className={index < 3 ? "playlist-item-prev playlist-item" : "playlist-item"} key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td className="text-nowrap">
                                                        {
                                                            index < 3 && <img src={formatImgSize(item.al.picUrl, 50)} alt="" />
                                                        }
                                                        <i className="play sprite_table" onClick={() => playMusic(item.id)} />
                                                        {item.name}
                                                    </td>
                                                    <td>{formatDate(item.dt, 'mm:ss')}</td>
                                                    <td>{item.ar[0].name}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </RankingDetailBody>
                    </RankingDetailWrapper>) : null
            }
        </>
    )
})
