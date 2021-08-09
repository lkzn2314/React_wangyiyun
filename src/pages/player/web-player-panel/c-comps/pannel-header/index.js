import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { changePlayListAction } from '@/pages/player/store/actionCreators';

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';

export default memo(function PannelHeader() {

    const dispatch = useDispatch();
    const { playList, currentSong } = useSelector(state => ({
        playList: state.getIn(["player", "playList"]),
        currentSong: state.getIn(["player", "currentSong"])
    }), shallowEqual);

    const clearPlaylist = () => {
        dispatch(changePlayListAction([]))
    }

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <h3>播放列表({playList.length})</h3>
                <div className="operator">
                    <button>
                        <i className="playlist_sprite icon favor" />
                        <i className="text">收藏全部</i>
                    </button>
                    <button onClick={() => clearPlaylist()}>
                        <i className="playlist_sprite icon remove" />
                        <i className="text">清除</i>
                    </button>
                </div>
            </HeaderLeft>
            <HeaderRight>
                {currentSong.name}
            </HeaderRight>
        </HeaderWrapper>
    )
})
