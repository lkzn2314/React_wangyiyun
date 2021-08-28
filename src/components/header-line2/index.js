import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { changeCurrentAreaAction } from '../../pages/discover/c-pages/disc/store/actionCreators';

import { HeadLineWrapper } from './style';

export default memo(function HeadLine2(props) {
    const { title = "Title", tabs = [] } = props;
    const dispatch = useDispatch();

    const changeAreaClick = item => {
        dispatch(changeCurrentAreaAction(item.area));
    }

    return (
        <HeadLineWrapper>
            <div className="left">
                <div className="title">{title}</div>
                <div className="keyword">
                    {
                        tabs.map(item => {
                            return (
                                <div className="item" key={item.name} onClick={() => changeAreaClick(item)}>
                                    {item.name}
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </HeadLineWrapper>
    )
})
