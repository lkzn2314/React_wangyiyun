import styled from 'styled-components';

export const HotDiscWrapper = styled.div`

    .disc-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 15px;

        .disc-list-item {
            width: 186px;
            height: 208px;
            padding: 0 0 30px 33px;

            &:nth-child(5n+1) {
                padding-left: 0;
            }
        }
    }
`