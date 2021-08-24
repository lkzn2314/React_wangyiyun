import React, { memo, useState, useEffect, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import SongsCover from '@/components/songs-cover';
import CategoryPanel from './c-comps/category-panel';

import {
    getAllPlaylistAction,
    getAllPlaylistCategoryAction
} from './store/actionCreators';

import {
    PlaylistWrapper,
    PlaylistBodyWrapper,
    PaginationWrapper
} from './style';

export default memo(function Playlist() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isShowCatePanel, setIsShowCatePanel] = useState(false);

    const dispatch = useDispatch();
    const { playlistDetail, total, currentCat } = useSelector(state => ({
        playlistDetail: state.getIn(['playlist', 'playlistDetail']),
        currentCat: state.getIn(['playlist', 'currentCat']),
        total: state.getIn(['playlist', 'total'])
    }), shallowEqual);

    useEffect(() => {
        dispatch(getAllPlaylistAction(currentPage, 35, currentCat))
    }, [dispatch, currentPage, currentCat]);
    useEffect(() => {
        dispatch(getAllPlaylistCategoryAction());
    }, [dispatch]);

    const pageChange = useCallback(page => {
        setCurrentPage(page);
    }, []);

    return (
        <PlaylistWrapper className="wrap-v2">
            <div className="head">
                <div className="left">
                    <span>{currentCat}</span>
                    <span className="category" onClick={() => setIsShowCatePanel(!isShowCatePanel)} >
                        选择分类
                        <i className="sprite_icon2" />
                    </span>
                </div>
                <button>热门</button>
            </div>

            {
                playlistDetail?.length ?
                    (<PlaylistBodyWrapper>
                        <div className="all-playlist">
                            {
                                playlistDetail.map(item => {
                                    return (
                                        <div key={item.id} className="item">
                                            <SongsCover info={item} infoType='playlist' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <PaginationWrapper className="sprite_button2" current={currentPage} pageSize={35} total={total}
                            showSizeChanger={false} showTitle={false}
                            onChange={page => pageChange(page)} />
                    </PlaylistBodyWrapper>) : null
            }
            {<CategoryPanel isShowCatePanel={isShowCatePanel} />}
        </PlaylistWrapper>
    )
})
