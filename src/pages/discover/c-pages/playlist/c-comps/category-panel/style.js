import styled from 'styled-components';

export const CategoryPanelWrapper = styled.div`
    position: absolute;
    left: 10px;
    top: 90px;
    width: 700px;
    height: 400px;
    background-color: #fff;
    box-shadow: -2px 3px 3px 3px rgba(188, 188, 188, .5);
`

export const HeadWrapper = styled.div`
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;

    div {
        width: 75px;
        height: 26px;
        line-height: 26px;
        margin: 20px 0 0 26px;
        text-align: center;
        background-position: 0 -64px;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

export const BodyWrapper = styled.div`
    display: flex;
    padding-left: 26px;

    .left {
        width: 71px;
        height: 340px;
        border-right: 1px solid #e6e6e6;

        .category {
            height: 65px;
            padding-top: 10px;

            &:nth-child(1) {
                height: 40px;
            }

            span {
                font-weight: 600;
            }
        }
    }

    .right {
        flex: 1;

        .row {
            position: relative;
            top: -5px;
            display: flex;
            flex-wrap: wrap;
            height: 65px;
            line-height: 65px;

            &:nth-child(1) {
                height: 40px;
                line-height: 40px;
                top: 10px;
            }

            .subItem {
                height: 16px;

                .category-subItem {
                    margin: 0 12px;

                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }

                span:nth-child(2) {
                    color: #dad8df;
                }
            }
        }
    }

`

export const CategoryImg = styled.i`
    position: relative;
    top: 5px;
    display: inline-block;
    width: 23px;
    height: 23px;
    margin-right: 5px;
    background-position: ${props => props.tag === '语种' ? '-20px -735px '
        : props.tag === '风格' ? '0 -60px'
            : props.tag === '场景' ? '0 -88px'
                : props.tag === '情感' ? '0 -117px'
                    : props.tag === '主题' ? '0 -141px' : ''}
`