import React, { memo, useState } from 'react';

import { artistCategories } from '@/network/local-data';

import {
    ArtistWrapper,
    Left,
    Right
} from './style';

export default memo(function Artist() {
    const [currentItem, setCurrentItem] = useState('推荐歌手');

    const changeCurrentClick = itemName => {
        setCurrentItem(itemName);
    }
    console.log(artistCategories);
    return (
        <ArtistWrapper className="wrap-v2">
            <Left>
                {
                    artistCategories?.map(item => {
                        return (
                            <div className="category" key={item.title}>
                                <h2 className="title">{item.title}</h2>
                                {
                                    item.artists.map(subItem => {
                                        return (
                                            <div className={currentItem === subItem.name ? "category-item active" : "category-item"} key={subItem.name}
                                                onClick={() => changeCurrentClick(subItem.name)}
                                            >
                                                <i />
                                                {subItem.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Left>
            <Right>
                right
            </Right>
        </ArtistWrapper>
    )
})
