import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import DiscoverHeader from './c-pages/discover-header';

import {
  DiscoverWrapper,
  BackTopStyle
} from './style';

export default memo(function LKDiscover(props) {
  const { route } = props;

  return (
    <>
      <DiscoverWrapper>
        <DiscoverHeader />
        {renderRoutes(route.routes)}
      </DiscoverWrapper>
      <BackTopStyle duration={0} visibilityHeight={100} >
        <div className="back-top sprite_top" />
      </BackTopStyle>
    </>
  )
})
