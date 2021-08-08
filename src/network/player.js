import request from "./request";

// 获取歌曲详情
export function getSongDetail(ids) {
    return request({
        url: '/song/detail',
        params: {
            ids
        }
    })
}

// 获取歌词
export function getLyric(id) {
    return request({
        url: '/lyric',
        params: {
            id
        }
    })
}

// 获取歌单列表
export function getPlaylistDetail(id) {
    return request({
        url: '/playlist/detail',
        params: {
            id
        }
    })
}

// 获取新碟详情
export function getDiscDetail(id) {
    return request({
        url: '/album',
        params: {
            id
        }
    })
}