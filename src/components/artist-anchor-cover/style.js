import styled from "styled-components";

export const ArtistAndAnchorWrapper = styled.div`
  display: flex;
  font-size: 12px;
  color: #666;

    img {
      width: ${props => props.imgSizeTo};
      height: ${props => props.imgSizeTo};
    }

  .info {
    margin-left: 15px;

    .name {
      padding: 10px 0 5px 0;
      font-weight: 700;
      font-size: 14px;
      color: #333;
    }

    .introduction {
      width: 155px;
    }
  }
`