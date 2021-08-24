import React, { memo } from 'react';

import { HeadLineWrapper } from './style';

export default memo(function HeadLine2(props) {
    const { title = "Title", tabs = [] } = props;

    return (
        <HeadLineWrapper>
            <div className="left">
                <div className="title">{title}</div>
                <div className="keyword">
                    {
                        tabs.map(item => {
                            return (
                                <div className="item" key={item}>
                                    {item}
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
