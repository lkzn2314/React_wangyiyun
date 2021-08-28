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
    const { allDiscs, total, currentArea } = useSelector(state => ({
        allDiscs: state.getIn(['disc', 'allDiscs']),
        total: state.getIn(['disc', 'total']),
        currentArea: state.getIn(['disc', 'currentArea'])
    }), shallowEqual);

    useEffect(() => {
        dispatch(getNewDiscsAction(35, currentPage, 'new', currentArea));
    }, [dispatch, currentPage, currentArea]);

    const pageChange = useCallback(page => {
        setCurrentPage(page)
    }, []);

    const tabs = [
        {
            name: '全部',
            area: 'ALL'
        },
        {
            name: '华语',
            area: 'ZH'
        },
        {
            name: '欧美',
            area: 'EA'
        },
        {
            name: '韩国',
            area: 'KR'
        },
        {
            name: '日本',
            area: 'JP'
        }
    ];

    return (
        <AllDiscWrapper>
            <HeaderLine2 title="全部新碟" tabs={tabs} />
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
