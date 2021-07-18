import React, { memo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { dicoverMenu } from '@/network/local-data';
import {
  DiscoverWrapper,
  TopMenu
} from './style';

import {
  getBanners
} from '@/network/discover';

export default memo(function LKDiscover(props) {
  const { route } = props;

  useEffect(() => {
    getBanners().then(res => {
      console.log(res);
    })
  }, [])

  return (
    <>
      <DiscoverWrapper>
        <div className="top" >
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
        </div>
      </DiscoverWrapper>
      {renderRoutes(route.routes)}
    </>
  )
})
