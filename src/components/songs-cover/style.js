import styled from 'styled-components';

export const SongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${props => (props.right || 0)} 10px 0;

  .cover-top {
    position: relative;

    /* A > B 表示A的儿子B（不包含子孙）*/
    &>img {
      width: 140px;
      height: 140px;
    }
    
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0 10px;
        background-position: 0 -537px;
        background-color: rgba(0, 0, 0, .4);
        color: #ccc;
        height: 27px;

        .erji {
          display: inline-block;
          width: 14px;
          height: 11px;
          margin-right: 5px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    color: #666;
  }
`