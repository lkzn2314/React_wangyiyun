import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getPlaylistDetailAction } from '@/pages/player/store/actionCreators';

import { formatImgSize } from '@/utils/format';
import { SongsCoverWrapper } from './style';

export default memo(function SongsCover(props) {
    const { info } = props;

    const dispatch = useDispatch();

    const formatCount = useCallback((count) => {
        if (count < 100000) return count;
        return Math.floor(count / 10000) + '万'
    }, [])

    const playMusic = playlistId => {
        // console.log(playlistId);
        dispatch(getPlaylistDetailAction(playlistId));
    }

    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={formatImgSize(info.picUrl, 140)} alt={info.name} />
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
            <div className="cover-bottom">{info.name}</div>
            <div className="cover-source"></div>

        </SongsCoverWrapper>
    )
})
