import styled from 'styled-components';

export const DiscWrapper = styled.div`
  margin-bottom: 30px;
`

export const Content = styled.div`
  position: relative;
  width：687px;
  height: 186px;
  margin-top: 25px;
  background-color: #f5f5f5;

  .disc {
    width: 645px;
    margin: 20px auto;
    overflow: hidden;

    .disc-list {
      display: flex !important;
      justify-content: space-between;
      margin: 20px auto;
    }
  }

  .arrow {
    position: absolute;
    top: 38%;
    width: 17px;
    height: 17px;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }

  .left {
    left: 5px;
    background-position: -260px -75px;

    &:hover {
      background-position: -280px -75px;
    }
  }
  .right {
    right: 8px;
    background-position: -300px -75px;

    &:hover {
      background-position: -320px -75px;
    }
  }
`