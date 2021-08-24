import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getDiscDetailAction } from '@/pages/player/store/actionCreators';

import { formatImgSize } from '@/utils/format';

import { DiscsCoverWrapper } from './style';

export default memo(function DiscsCover(props) {
    const { info, width, height } = props;

    const dispatch = useDispatch();

    const playMusic = discId => {
        dispatch(getDiscDetailAction(discId));
    }

    return (
        <DiscsCoverWrapper width={width} height={height}>
            <div className="cover">
                <img src={formatImgSize(info.picUrl, 100)} alt={info.name} />
                <i className="play sprite_icon" onClick={e => playMusic(info.id)} />
                <i className="cover2 sprite_cover" />
            </div>
            <div className="covber-bottom">
                <div className="disc-name text-nowrap">{info.name}</div>
                <div className="disc-singer text-nowrap">{info.artist.name}</div>
            </div>
        </DiscsCoverWrapper>
    )
})
