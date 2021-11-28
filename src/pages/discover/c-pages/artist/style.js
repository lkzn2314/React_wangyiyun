import styled from "styled-components";

export const ArtistWrapper = styled.div`
    display: flex;
`

export const Left = styled.div`
    width: 180px;
    padding: 24px 10px;
    background: #f9f9f9;
    border: 1px solid #d3d3d3;

    .category {
        border-bottom: 1px solid #d3d3d3;
        padding: 16px 0 5px 0;

        .title {
            font-size: 16px;
            font-weight: 600;
            color: #333;
            padding-left: 14px;
        }

        .category-item {
            width: 160px;
            height: 29px;
            line-height: 29px;
            padding-left: 27px;
            background-color: #fbfbfb;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }

            i {
                display: inline-block;
                width: 4px;
                height: 4px;
                position: relative;
                left: -13px;
                top: -3px;
                background: #afafaf;
            }
        }

        .active {
            border: 1px solid #e2e2e2;
            color: #c20c0c;
            background: #fff;

            &:hover {
                text-decoration: none;
            }

            i {
                background: #c20c0c;
            }
        }
    }
`

export const Right = styled.div`
    width: 800px;
    height: 500px;
    background: yellow;
`