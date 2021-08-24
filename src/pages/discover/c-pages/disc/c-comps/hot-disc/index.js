import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getNewDiscsAction } from '@/pages/discover/c-pages/recommend/store/actionCreators';

import HeaderLine2 from '@/components/header-line2';
import DiscsCover from '@/components/discs-cover';

import { HotDiscWrapper } from './style';

export default memo(function HotDisc() {

    const dispatch = useDispatch();
    const { newDiscs } = useSelector(state => ({
        newDiscs: state.getIn(['recommend', 'newDiscs'])
    }), shallowEqual)

    useEffect(() => {
        dispatch(getNewDiscsAction());
    }, [dispatch]);

    return (
        <HotDiscWrapper>
            <HeaderLine2 title="热门新碟" />
            <div className="disc-list">
                {
                    newDiscs?.slice(0, 10).map(item => {
                        return (
                            <div key={item.id} className="disc-list-item">
                                <DiscsCover info={item} width="153px" height="178px" />
                            </div>
                        )
                    })
                }
            </div>
        </HotDiscWrapper>
    )
})
