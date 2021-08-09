import React, { memo, useRef, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { scrollTo } from "@/utils/lyric-scroll";

import { LyricScrollWrapper } from './style';

export default memo(function LyricScrollPanel() {

  const { lyric, lyricItemIndex } = useSelector(state => ({
    lyric: state.getIn(["player", "lyric"]),
    lyricItemIndex: state.getIn(["player", "lyricItemIndex"])
  }), shallowEqual);

  const panelRef = useRef();
  useEffect(() => {
    if (lyricItemIndex >= 0 && lyricItemIndex < 3) return;
    scrollTo(panelRef.current, (lyricItemIndex - 3) * 32, 300)
  }, [lyricItemIndex]);

  return (
    <LyricScrollWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          lyric?.map((item, index) => {
            return (
              <div key={item.time} className={lyricItemIndex === index ? "lrc-item active" : "lrc-item"} >
                {item.content}
              </div>
            )
          })
        }
      </div>
    </LyricScrollWrapper>
  )
})
