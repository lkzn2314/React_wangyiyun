import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeCurrentCatAction } from '@/pages/discover/c-pages/playlist/store/actionCreators';

import { HeaderWrapper } from './style';

export default memo(function HeaderLine(props) {
    const { title = 'Title', tabs = [], to } = props;

    const dispatch = useDispatch();
    const goTOPlaylistAndChangeCatClick = catName => {
        console.log(catName);
        dispatch(changeCurrentCatAction(catName));
    }

    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <div className="title">{title}</div>
                <div className="keyword">
                    {
                        tabs.map(item => {
                            return (
                                <Link className="item" key={item.id}
                                    to='/discover/playlist'
                                    onClick={() => goTOPlaylistAndChangeCatClick(item.name)}>
                                    {item.name}
                                    <span className="divider">|</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <Link className="right" to={to}>
                更多
                <i className="icon sprite_02" />
            </Link>
        </HeaderWrapper>
    )
})
