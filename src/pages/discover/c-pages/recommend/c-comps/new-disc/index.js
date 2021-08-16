import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import HeaderLine from '@/components/header-line';
import DiscsCover from '@/components/discs-cover';

import { getNewDiscsAction } from '../../store/actionCreators';

import {
  DiscWrapper,
  Content
} from './style';

export default memo(function NewDisc() {

  const dispatch = useDispatch();
  const { newDiscs } = useSelector(state => ({
    newDiscs: state.getIn(['recommend', 'newDiscs'])
  }), shallowEqual)

  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getNewDiscsAction(15))
  }, [dispatch]);

  return (
    <DiscWrapper>
      <HeaderLine title="新碟上架" />
      <Content>
        <i className="left arrow sprite_02" onClick={e => carouselRef.current.prev()} />
        <i className="right arrow sprite_02" onClick={e => carouselRef.current.next()} />
        <div className="disc">
          <Carousel dots={false} speed={1200} ref={carouselRef}>
            {
              [0, 1, 2].map(index => {
                return (
                  <div className="disc-list" key={index}>
                    {
                      newDiscs?.slice(index * 5, (index + 1) * 5).map(item => {
                        return (<DiscsCover key={item.id} info={item} />)
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </Content>
      {/* <Carousel className="carousel">
        {
          [0, 1].map(index => {
            return (
              <div className="disc-list" key={index}>
                {
                  newDiscs.slice(index * 5, (index + 1) * 5).map(item => {
                    return (<DiscsCover key={item.id} info={item} />)
                  })
                }
              </div>
            )
          })
        }
      </Carousel> */}
    </DiscWrapper >
  )
})
