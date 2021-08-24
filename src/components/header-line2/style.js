import styled from "styled-components";

export const HeadLineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 42px;
    line-height: 42px;
    border-bottom: 2px solid #c20c0c;

    .left {
        display: flex;
        align-items: center;

        .title {
            font-size: 24px;
        }

        .keyword {
            display: flex;
            margin-left: 15px;
            font-size: 12px;
        
            .item {
                &:hover {
                cursor: pointer;
                text-decoration: underline;
                }
        
                .divider {
                margin: 0 10px;
                color: #ccc;
                }
            }
        }

`