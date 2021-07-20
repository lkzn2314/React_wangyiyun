import React, { memo } from 'react';

import { HeaderWrapper } from './style';

export default memo(function ThemeHeaderRMC(props) {
  return (
    <HeaderWrapper>
      <div className="left">
        <div className="title">{props.title}</div>
        <div className="keyword">
          {
            props.tabs.map(item => {
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
      <div className="right">
        更多
        <i className="icon" />
      </div>
    </HeaderWrapper>
  )
})
