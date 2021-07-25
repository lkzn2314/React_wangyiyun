import styled from 'styled-components';

export const DiscsCoverWrapper = styled.div`
  width: 118px;
  height: 150px;
  margin-left: 11px;
  font-size: 12px;

  .cover {
    position: relative;
    width: 118px;
    height: 100px;
    box-shadow: 0 2px 5px 1px rgba(0,0,0,.2);
    
    .cover2 {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
    }

    img {
      width: 100px;
      height: 100px;
    }

    &:hover {
      cursor: pointer;

      .play {
        background-position: 0 -60px;
      }
    }

    .play {
      position: absolute;
      right: 23px;
      bottom: 7px;
      width: 17px;
      height: 17px;
      z-index: 2;
      text-indent: -9999px;
    }
  }

  .covber-bottom {
    margin-top: 5px;

    & > div:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    .disc-name {
      color: #000;
    }
    .disc-singer {
      color: #333;
    }
  }
`