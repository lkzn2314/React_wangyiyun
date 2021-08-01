import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { dicoverMenu } from '@/network/local-data';
import {
  DiscoverWrapper,
  TopMenu,
  BackTopStyle
} from './style';

export default memo(function LKDiscover(props) {
  const { route } = props;

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
      <BackTopStyle duration={0} visibilityHeight={100} >
        <div className="back-top sprite_top" />
      </BackTopStyle>
    </>
  )
})
