import styled from "styled-components";

export const ArtistWrapper = styled.div`
  width: 210px;
  margin: 10px 0 0 20px;

  .artist-title {
    display: flex;
    justify-content: space-between;
    width: 210px;
    height: 24px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

      .title-name {
        font-weight: 700;
        color: #333;
      }
  }

  .artist-item {
    margin-bottom: 15px;
    background-color: #fafafa;
    border: 1px solid #eee;
  }

  .apply {
    width: 100%;
    height: 31px;
    line-height: 31px;
    font-weight: 700;
    text-align: center;
    border: 1px solid #ccc;
    background-color: #fdfdfd;
  }
`

export const AnchorWrapper = styled.div`
  width: 210px;
  margin: 20px 0 0 20px;

  .artist-title {
    width: 210px;
    height: 24px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

      .title-name {
        font-weight: 700;
        color: #333;
      }
  }

  .anchor-item {
    height: 40px;
    margin-bottom: 15px;
  }
`