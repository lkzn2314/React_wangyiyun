import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import { getBannersAction } from '../../store/actionCreators';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';

export default memo(function Top0Banners() {
    //state
    const [currentIndex, setCurrentIndex] = useState(0);

    //redux相关
    const dispatch = useDispatch();
    const { banners } = useSelector(state => ({
        banners: state.getIn(['recommend', 'banners'])
    }), shallowEqual);

    // 其他hooks
    const bannerRef = useRef();
    useEffect(() => {
        dispatch(getBannersAction())
    }, [dispatch]);

    // 其他业务逻辑
    const beforeBannerChange = useCallback((from, to) => {
        setCurrentIndex(to)
    }, []);
    const bgImage = banners && banners[currentIndex] && banners[currentIndex].imageUrl + '?imageView&blur=40x20';

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" ref={bannerRef}
                        autoplay beforeChange={beforeBannerChange} >
                        {
                            banners?.map(item => {
                                return (
                                    <div key={item.imageUrl} className="banner-item">
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>

                <BannerRight />

                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
