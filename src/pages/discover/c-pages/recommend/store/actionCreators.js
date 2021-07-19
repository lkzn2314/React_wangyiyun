import * as actionTypes from './constants';

import { getBanners } from '@/network/discover';

const changeBannersAction = res => ({
    type: actionTypes.CHANGE_BANNERS,
    banners: res.banners
})

export const getBannersAction = () => {
    return dispatch => {
        getBanners().then(res => {
            dispatch(changeBannersAction(res))
        })
    }
}
