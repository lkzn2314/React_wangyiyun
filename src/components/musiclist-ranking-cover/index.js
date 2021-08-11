import React, { memo, useState, useEffect } from 'react';

import { formatImgSize } from '@/utils/format';

import { CoverWrapper } from './style';

export default memo(function MusiclistRankingCover(props) {
    const { info, index } = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

    }, [])

    const changeRankingClick = (index, id) => {
        console.log(index, id);
        setCurrentIndex(index);
    }

    return (
        <CoverWrapper className={currentIndex === index ? "active" : ""} onClick={() => changeRankingClick(index, info?.id)}>
            <img src={formatImgSize(info.coverImgUrl, 40)} alt='' />
            <div>
                <span>{currentIndex}</span>
                <div className="name">{info.name}</div>
                <div className="text">{info.updateFrequency}</div>
            </div>
        </CoverWrapper>
    )
})
