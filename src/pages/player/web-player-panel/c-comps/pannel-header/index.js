import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';

export default memo(function PannelHeader() {
    const { playList, currentSong } = useSelector(state => ({
        playList: state.getIn(["player", "playList"]),
        currentSong: state.getIn(["player", "currentSong"])
    }), shallowEqual);

    return (
        <HeaderWrapper>
            <HeaderLeft>
                <h3>播放列表({playList.length})</h3>
                <div className="operator">
                    <button>
                        <i className="playlist_sprite icon favor" />
                        收藏全部
                    </button>
                    <button>
                        <i className="playlist_sprite icon remove" />
                        清除
                    </button>
                </div>
            </HeaderLeft>
            <HeaderRight>
                {currentSong.name}
            </HeaderRight>
        </HeaderWrapper>
    )
})
