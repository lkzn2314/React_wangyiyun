import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { changeCurrentCatAction } from '../../store/actionCreators';

import {
    CategoryPanelWrapper,
    HeadWrapper,
    BodyWrapper,
    CategoryImg
} from './style';

export default memo(function CategoryPanel(props) {
    const { isShowCatePanel } = props;

    const dispatch = useDispatch();
    const { allPlaylistCategory } = useSelector(state => ({
        allPlaylistCategory: state.getIn(['playlist', 'allPlaylistCategory']),
    }), shallowEqual);

    const changCatClick = catName => {
        dispatch(changeCurrentCatAction(catName))
    };

    return (
        <>
            {isShowCatePanel && <CategoryPanelWrapper>
                <HeadWrapper>
                    <div className="sprite_button2" onClick={() => changCatClick('全部')}>全部风格</div>
                </HeadWrapper>

                <BodyWrapper>
                    <div className="left">
                        {
                            allPlaylistCategory?.map(item => {
                                return (
                                    <div className="category" key={item.name}>
                                        <CategoryImg className="sprite_icon2" tag={item.name} />
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="right">
                        {
                            allPlaylistCategory?.map(item => {
                                return (
                                    <ul key={item.name} className="row">
                                        {
                                            item.subs.map(subItem => {
                                                return (
                                                    <li key={subItem.name} className="subItem">
                                                        <span className="category-subItem" onClick={() => changCatClick(subItem.name)}>{subItem.name}</span>
                                                        <span>|</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            })
                        }
                    </div>
                </BodyWrapper>
            </CategoryPanelWrapper>}
        </>
    )
})
