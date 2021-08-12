import styled from 'styled-components';
import { BackTop } from 'antd';

export const DiscoverWrapper = styled.div`

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