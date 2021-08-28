import * as actionTypes from './constants';

import {
    getNewDiscs
} from '@/network/discover';

const changeNewDiscsAction = allDiscs => ({
    type: actionTypes.CHANGE_NEW_DISCS,
    allDiscs
})

const changeTotalAction = total => ({
    type: actionTypes.CHANGE_TOTAL,
    total
})

export const changeCurrentAreaAction = currentArea => ({
    type: actionTypes.CHANGE_CURRENT_AREA,
    currentArea
})

export const getNewDiscsAction = (limit, page = 1, type, area) => {
    return dispatch => {
        getNewDiscs(limit, page, type, area).then(res => {
            console.log(res);
            dispatch(changeNewDiscsAction(res?.albums));
            dispatch(changeTotalAction(res?.total));
        })
    }
}