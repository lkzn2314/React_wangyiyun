import styled from 'styled-components';
import { BackTop } from 'antd';

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #C20C0C;
  }
`

export const TopMenu = styled.div`
  display: flex;
  position: relative;
  top: -4px;
  padding-left: 180px;

  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover,
      &.active {
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
    }
  }
`

export const BackTopStyle = styled(BackTop)`
  .back-top {
    position: fixed;
    left: 50%;
    bottom: 160px;
    width: 49px;
    height: 44px;
    margin-left: 500px;
    background-position: -265px -47px;
    z-index: 999;

    &:hover {
      background-position-x: -325px;
    }
  }
 
`