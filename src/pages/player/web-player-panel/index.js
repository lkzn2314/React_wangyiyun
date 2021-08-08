import React, { memo } from 'react';

import PlayerPanelHeader from './c-comps/pannel-header';
import PlayerPanelBodyLeft from './c-comps/pannel-body-left';
import PlayerPannelLyricRight from './c-comps/lyric-scroll-right';

import { WebPlayerPannelWrapper } from './style';

export default memo(function WebPlayerPanel() {
  return (
    <WebPlayerPannelWrapper>
      <PlayerPanelHeader />
      <div className="body">
        <PlayerPanelBodyLeft />
        <PlayerPannelLyricRight />
      </div>
    </WebPlayerPannelWrapper>
  )
})
