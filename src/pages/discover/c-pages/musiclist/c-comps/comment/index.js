import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { Avatar } from 'antd';
// import moment from 'moment';

import { getPlaylistCommentAction } from '../../store/actionCreators';

import { CommentWrapper } from './style';
// const { TextArea } = Input;

export default memo(function Comment() {

    const dispatch = useDispatch();
    const { currentIndex, toplist, playlistComment } = useSelector(state => ({
        currentIndex: state.getIn(['musiclist', 'currentIndex']),
        toplist: state.getIn(['musiclist', 'toplist']),
        playlistComment: state.getIn(['musiclist', 'playlistComment'])
    }), shallowEqual);

    useEffect(() => {
        const playlistId = toplist && toplist[currentIndex]?.id;
        dispatch(getPlaylistCommentAction(playlistId));
    }, [dispatch, toplist, currentIndex])

    return (
        <CommentWrapper>
            <div className="head">
                <div className="title">
                    评论
                    <span>共{playlistComment?.total}条评论</span>
                </div>
            </div>

            <>
                
            </>
        </CommentWrapper>
    )
})
