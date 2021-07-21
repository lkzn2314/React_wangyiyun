import React, { memo } from 'react';

import { HeaderWrapper } from './style';

export default memo(function ThemeHeaderRMC(props) {
  const { title = 'Title', tabs = [] } = props;

  return (
    <HeaderWrapper className="sprite_02">
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
      <div className="right">
        更多
        <i className="icon sprite_02" />
      </div>
    </HeaderWrapper>
  )
})
