import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  padding: 0 10px 4px 34px;
  border-bottom: 2px solid #C10D0C;
  background-position: -225px -156px;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keyword {
      display: flex;

      .item {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`