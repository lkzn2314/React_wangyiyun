import React, { memo, useState, useEffect, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import SongsCover from '@/components/songs-cover';

import { getAllPlaylistAction } from './store/actionCreators';

import {
    PlaylistWrapper,
    PlaylistBodyWrapper,
    PaginationWrapper
} from './style';

export default memo(function Playlist() {
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const { allPlaylist, total } = useSelector(state => ({
        allPlaylist: state.getIn(['playlist', 'allPlaylist']),
        total: state.getIn(['playlist', 'total'])
    }), shallowEqual)

    useEffect(() => {
        dispatch(getAllPlaylistAction(currentPage, 35))
    }, [dispatch, currentPage])

    const pageChange = useCallback(page => {
        console.log(page);
        setCurrentPage(page);
    }, [])

    return (
        <PlaylistWrapper className="wrap-v2">
            <div className="head">
                <div className="left">
                    <span>全部</span>
                    <span className="category">选择分类 <i className="sprite_icon2" /></span>
                </div>
                <button>热门</button>
            </div>

            {
                allPlaylist?.length ?
                    (<PlaylistBodyWrapper>
                        <div className="all-playlist">
                            {
                                allPlaylist.map(item => {
                                    return (
                                        <div key={item.id} className="item">
                                            <SongsCover info={item} infoType='playlist' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <PaginationWrapper current={currentPage} pageSize={35} total={total}
                            showSizeChanger={false} showTitle={false}
                            onChange={page => pageChange(page)} />
                    </PlaylistBodyWrapper>) : null
            }
        </PlaylistWrapper>
    )
})
