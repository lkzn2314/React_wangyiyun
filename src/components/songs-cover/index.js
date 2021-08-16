import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getPlaylistDetailAction } from '@/pages/player/store/actionCreators';

import { formatImgSize } from '@/utils/format';
import { SongsCoverWrapper } from './style';

export default memo(function SongsCover(props) {
    const { info, infoType } = props;

    const dispatch = useDispatch();

    const formatCount = useCallback((count) => {
        if (count < 100000) return count;
        return Math.floor(count / 10000) + '万'
    }, [])

    const playMusic = playlistId => {
        dispatch(getPlaylistDetailAction(playlistId));
    }

    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={formatImgSize(info.picUrl || info.coverImgUrl, 140)} alt={info.name} />
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="erji sprite_icon" />
                            {formatCount(info.playCount)}
                        </span>
                        <i className="play sprite_icon" onClick={e => playMusic(info.id)} />
                    </div>
                </div>
            </div>
            <>
                <div className={infoType === 'playlist' ? "cover-bottom text-nowrap" : "cover-bottom"}>{info.name}</div>
                {infoType === 'playlist' && <div className="cover-source">by {info.creator.nickname}</div>}
            </>
        </SongsCoverWrapper>
    )
})
