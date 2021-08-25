import React, { memo, useEffect, useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewDiscsAction } from '../../store/actionCreators';

import HeaderLine2 from '@/components/header-line2';
import DiscsCover from '@/components/discs-cover';

import { AllDiscWrapper } from './style';
import { PaginationWrapper } from '@/pages/discover/c-pages/playlist/style';

export default memo(function AllDisc() {
    const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useDispatch();
    const { allDiscs, total } = useSelector(state => ({
        allDiscs: state.getIn(['disc', 'allDiscs']),
        total: state.getIn(['disc', 'total'])
    }), shallowEqual);

    useEffect(() => {
        dispatch(getNewDiscsAction(35, currentPage, 'new', 'ALL'));
    }, [dispatch, currentPage]);

    const pageChange = useCallback(page => {
        setCurrentPage(page)
    }, []);

    return (
        <AllDiscWrapper>
            <HeaderLine2 title="全部新碟" tabs={['全部', '华语', '欧美', '韩国', '日本']} />
            <div className="disc-list">
                {
                    allDiscs?.map(item => {
                        return (
                            <div key={item.id} className="disc-list-item">
                                <DiscsCover info={item} width="153px" height="178px" />
                            </div>
                        )
                    })
                }
            </div>
            {
                allDiscs?.length ? <PaginationWrapper className="sprite_button2" current={currentPage} pageSize={35} total={total}
                    showSizeChanger={false} showTitle={false}
                    onChange={page => pageChange(page)} /> : null
            }
        </AllDiscWrapper>
    )
})
