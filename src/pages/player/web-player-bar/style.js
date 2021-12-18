import styled from 'styled-components';

export const WebPlayerBarWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: ${props => props.isShowBar ? '0' : '-46px'};
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;
    transition: all .5s;
    z-index: 999;

    &.fixed-position {
      bottom: 0 !important;
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 50%;
        bottom: 0;
        height: 47px;
        transform: translateX(-50%);
    }
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, 
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;

    &:hover {
      cursor: pointer;
      background-position-x: -30px;
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      cursor: pointer;
      background-position-x: -110px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};

    &:hover {
      cursor: pointer;
    }
  }
`

export const PlayInfo = styled.div`
  display: flex;
  align-items: center;
  width: 642px;

  .image {
    display: block;
    width: 34px;
    height: 34px;
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    flex: 1;
    margin-left: 10px;
    color: #a1a1a1;

    .song {
      position: relative;
      top: 8px;
      left: 8px;
      color: #e1e1e1;

      & > span: hover {
        cursor: pointer;
        text-decoration: underline;
      }

      .singer-name {
        margin-left: 10px;
        color: #a1a1a1;
      }

      .link {
        display: inline-block;
        position: relative;
        left: 10px;
        top: 5px;
        width: 14px;
        height: 15px;
        background-position: -110px -103px;

        &:hover {
          cursor: pointer;
          background-position-x: -130px;
        }
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          cursor: default;
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) 0 0;
        }

        .ant-slider-track {
          cursor: default;
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) 0 -66px;
        }

        .ant-slider-handle {
          cursor: default;
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
  
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;

    &:hover {
      cursor: pointer;
    }
  }
  
  .lyric {
    background: url(${require('@/assets/img/playbar_new.png')}) 0 0 no-repeat;

    &:hover {
      background-position: 0 -25px;
    }
  }

  .favor {
    background-position: -88px -163px;

    &:hover {
      background-position-y: -189px;
    }
  }

  .share {
    background-position: -114px -163px;

    &:hover {
      background-position-y: -189px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      position: relative;
      background-position: -2px -248px;
    }

    .ant-slider {
      position: absolute;
      left: 74px;
      top: -132px;
      width: 32px;
      height: 113px;
      padding-left: 13px;
      background-position: 0 -503px;
      z-index: 9;

      .ant-slider-rail {
        cursor: default;
        width: 4px;
        height: 93px;
        margin-bottom: 5px;
        background: none;
      }

      .ant-slider-track {
        cursor: default;
        width: 4px;
        margin-bottom: 5px;
        background-color: #c70c0c;
      }

      .ant-slider-handle {
        cursor: default;
        width: 18px;
        height: 20px;
        border: none;
        background: url(${require("@/assets/img/sprite_icon.png")}) -40px -250px;
      }
    }

    .loop {
      background-position: ${props => {
    switch (props.sequence) {
      case 1:
        return "-66px -248px";
      case 2:
        return "-66px -344px";
      default:
        return "-3px -344px";
    }
  }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #666;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`

export const LockStyle = styled.div`
  position: absolute;
  right: 0;
  bottom: 46px;
  width: 65px;
  height: 20px;
  background-position: 0 -380px;

  .lock {
    display: block;
    width: 18px;
    height: 18px;
    margin: 5px 0 0 16px;
    background-position: ${props => props.isFixedPostion ? '-100px -380px' : '-80px -380px'};
    
    &:hover {
      background-position-y: -400px;
    }
  }
`