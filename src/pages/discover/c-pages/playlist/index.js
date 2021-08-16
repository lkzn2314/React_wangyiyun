import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import SongsCover from '@/components/songs-cover';

import { getAllPlaylistAction } from './store/actionCreators';

import {
    PlaylistWrapper,
    PlaylistBodyWrapper
} from './style';

export default memo(function Playlist() {

    const dispatch = useDispatch();
    const { allPlaylist } = useSelector(state => ({
        allPlaylist: state.getIn(['playlist', 'allPlaylist'])
    }), shallowEqual)

    useEffect(() => {
        dispatch(getAllPlaylistAction())
    }, [dispatch])

    return (
        <PlaylistWrapper className="wrap-v2">
            <div className="head">
                <div className="left">
                    <span>全部</span>
                    <span className="category">选择分类 <i className="sprite_icon2" /></span>
                </div>
                <button>热门</button>
            </div>

            <PlaylistBodyWrapper>
                <div className="all-playlist">
                    {
                        allPlaylist.length ?
                            allPlaylist.map(item => {
                                return (
                                    <div key={item.id} className="item">
                                        <SongsCover info={item} infoType='playlist' />
                                    </div>
                                )
                            }) : null
                    }
                </div>

            </PlaylistBodyWrapper>
        </PlaylistWrapper>
    )
})
