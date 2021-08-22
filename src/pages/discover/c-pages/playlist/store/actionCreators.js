import * as actionTypes from './constants';

import {
    getAllPlaylist,
    getAllPlaylistCategory,
    getHotPlaylistCategory
} from '@/network/discover';

import { noRepeatArr } from '@/utils/format';

const changeAllPlaylistAction = playlists => ({
    type: actionTypes.CHANGE_ALL_PLAYLIST,
    playlistDetail: playlists
})

const changeTotalAction = total => ({
    type: actionTypes.CHANGE_TOTAL,
    total
})

const changeHotPlaylistCategoryAction = hotPlaylistCategory => ({
    type: actionTypes.CHANGE_HOT_PLAYLIST_CATEGORY,
    hotPlaylistCategory
})

const changeAllPlaylistCategoryAction = allPlaylistCategory => ({
    type: actionTypes.CHANGE_ALL_PLAYLIST_CATEGORY,
    allPlaylistCategory
})

export const changeCurrentCatAction = currentCat => ({
    type: actionTypes.CHANGE_CURRENT_CAT,
    currentCat
})

//由于数据有重复，需要进行去重
export const getAllPlaylistAction = (offset, limit, cat) => {
    return dispatch => {
        getAllPlaylist(offset, limit, cat).then(res => {
            const noRepeatPlaylists = noRepeatArr(res?.playlists);
            dispatch(changeAllPlaylistAction(noRepeatPlaylists));
            dispatch(changeTotalAction(res?.total));
        })
    }
}

export const getHotPlaylistCategoryAction = () => {
    return dispatch => {
        getHotPlaylistCategory().then(res => {
            console.log(res);
            dispatch(changeHotPlaylistCategoryAction(res?.tags));
        })
    }
}

export const getAllPlaylistCategoryAction = () => {
    return dispatch => {
        getAllPlaylistCategory().then(res => {
            // 重组category数据格式
            const categories = res?.categories;
            const allPlaylistCategory = Object.entries(categories).map(([key, value]) => ({
                name: value,
                subs: []
            }))
            for (let item of res?.sub) {
                allPlaylistCategory[item.category].subs.push(item)
            }
            console.log(allPlaylistCategory);
            dispatch(changeAllPlaylistCategoryAction(allPlaylistCategory));
        })
    }
}
