import styled from 'styled-components';

export const CoverWrapper = styled.div`
    display: flex;
    width: 240px;
    height: 62px;
    padding: 10px 0 10px 20px;

    &.active {
        background-color: #e6e6e6;
    }

    &:hover {
        cursor: pointer;
        background-color: #e6e6e6;
    }

    img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
    .name {
        color: #000;
        margin: 1px 0 4px 0;
    }
    .text {
        color: #b299b2;
    }
`