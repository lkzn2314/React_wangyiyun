import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { dicoverMenu } from '@/network/local-data';

import {
    DiscoverHeaderWrapper,
    TopMenu
} from './style';

export default memo(function DiscoverHeader() {
    return (
        <DiscoverHeaderWrapper>
            <TopMenu className="wrap-v1">
                {
                    dicoverMenu.map((item) => {
                        return (
                            <div className="item" key={item.title}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </div>
                        )
                    })
                }
            </TopMenu>
        </DiscoverHeaderWrapper>
    )
})
