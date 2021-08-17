import styled from 'styled-components';

export const RankingDetailWrapper = styled.div`
    padding: 0 30px 40px 40px;

    .head {
        display: flex;
        justify-content: space-between;
        height: 35px;
        line-height: 35px;
        border-bottom: 2px solid #c20c0c;

        .title {
            font-size: 20px;

            span {
                margin-left: 20px;
                font-size: 12px;
            }
        }

        .playcount {
            color: #c20c0c;
        }
    }
`

export const RankingDetailBody = styled.div`
    table {
        width: 670px;
        table-layout: fixed;

        .thead-tr {
            height: 39px;
            color: #666;
            text-align: left;
            background-color: #fcfcfc;

            th {
                padding-left: 8px;
                border-right: 2px solid #e8e8e8;
            }
    
            .index {
                width: 78px;
            }
    
            .table-title {
                width: 327px;
                table-layout: fixed;
            }
    
            .duration {
                width: 90.5px;
            }
    
            .songer {
                width: 173.5px;
            }
        }
    }

    tbody {
        .playlist-item:nth-child(odd) {
            background-color: #f7f7f7;
        }

        .playlist-item {
            height: 30px;
            line-height: 30px;

            td {
                padding-left: 8px;
            }

            .play {
                position: relative;
                top: 5px;
                display: inline-block;
                width: 17px;
                height: 17px;
                margin-right: 8px;
                background-position: 0 -103px;

                &:hover {
                    cursor: pointer;
                    background-position-y: -128.5px;
                }
            }
        }

        .playlist-item-prev {
            height: 69px;
            line-height: 69px;

            img {
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }
        }
    }

`