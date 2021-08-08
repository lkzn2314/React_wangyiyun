import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 250px;
    height: 126px;
    padding: 16px 22.5px;
    background-color: #e6e6e6;
    
    .text {
        height: 43px;
        line-height: 20px;
    }

    .btn {
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        margin: 15px auto;
        background-position: 0 -195px;

        &:hover {
            cursor: pointer;
            background-position-x: -110px;
        }
    }
`