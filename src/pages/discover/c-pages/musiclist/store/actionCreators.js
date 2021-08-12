import * as actionTypes from './constants';
import { getToplist } from '@/network/discover';

const changeToplistAction = toplist => ({
    type: actionTypes.CHANGE_TOPLIST,
    toplist
})

export const getToplistAction = () => {
    return dispatch => {
        getToplist().then(res => {
            dispatch(changeToplistAction(res?.list))
        })
    }
}