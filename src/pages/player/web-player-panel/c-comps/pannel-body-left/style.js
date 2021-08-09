import styled from 'styled-components';

export const PlayListWrapper = styled.div`
  position: relative;
  width: 560px;
  height: 260px;
  padding: 2px;
  overflow-y: scroll;

  /* 修改系统默认滚动条样式 */
  &::-webkit-scrollbar {
    width: 6px;
    height: 260px;
  }
  &::-webkit-scrollbar-thumb {
      background: #434344;
  }
  &::-webkit-scrollbar-track {
      background: #0d0d0e;
  }

  .play-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding: 0 8px 0 25px;
    line-height: 28px;
    color: #ccc;

    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #000;
    }

    &.active {
      color: #fff;
      background-color: #000;

      ::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .singer {
        width: 80px;
      }

      .duration {
        width: 45px;
      }

      .link {
        width: 14px;
        height: 16px;
        margin-left: 20px;
        background-position: -100px 0;
      }
    }
  }

  .no-playlist {
    width: 360px;
    height: 90px;
    margin: 80px auto 0;
    color: #9a9a9a;
    text-align: center;

    .first {
      margin-bottom: 24px;

      i {
        display: inline-block;
        position: relative;
        top: 5px;
        widtH: 36px;
        height: 29px;
        margin-right: 5px;
        background-position: -138px 0;
      }
    }
  }
`