import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    display: flex;
    position: relative;
    height: 285px;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    
    .image {
      width: 100%;
      height: 285px;
    }
  }

  /* 轮播图指示圈样式 */
  .ant-carousel .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 3px;

    &:hover {
      background-color: red;
    }
  }

  .ant-carousel .slick-dots li.slick-active button{
    background-color: red;
  }
  
  .ant-carousel .slick-dots-bottom {
    bottom: 18px;
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 285px;
  background: url(${require("@/assets/img/download.png")});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
