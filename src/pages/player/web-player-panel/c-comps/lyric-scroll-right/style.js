import styled from 'styled-components';

export const LyricScrollWrapper = styled.div`
  flex: 1;
  position: relative;
  height: 260px;
  margin-bottom: 20px;
  padding-top: 20px;
  overflow-y: scroll;
  background: #2a2d32;

  &::-webkit-scrollbar {
    width: 5px;
    height: 260px;
  }
  &::-webkit-scrollbar-thumb {
      background: #434344;
  }
  &::-webkit-scrollbar-track {
      background: #0d0d0e;
  }

  .lrc-content {
  
    .lrc-item {
      height: 32px;
      text-align: center;
      color: #989898;

      &.active {
        color: #fff;
        font-size: 14px;
      }
    }
  }
`