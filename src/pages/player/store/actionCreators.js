import { message } from 'antd';
import * as actionTypes from './constants';
import {
    getSongDetail,
    getLyric,
    getPlaylistDetail,
    getDiscDetail
} from '@/network/player';
import { parseLyric } from '@/utils/parse-lyric';

const changeCurrentSongAction = song => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: song
});

const changeCurrentSongIndexAction = index => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex: index
});

export const changePlayListAction = playList => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
});

// 0 循环  1 随机  2 单曲
export const changeSequenceAction = sequence => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
});

// 切换歌曲(前/后一首)
export const changeMusicAction = tag => {
    return (dispatch, getState) => {
        const sequence = getState().getIn(['player', 'sequence']);
        let currentSongIndex = getState().getIn(['player', 'currentSongIndex']);
        const playList = getState().getIn(['player', 'playList']);
        if (!playList.length) return;
        switch (sequence) {
            case 1:
                let randomIndex = Math.floor(Math.random() * playList.length);
                while (randomIndex === currentSongIndex) {
                    randomIndex = Math.floor(Math.random() * playList.length);
                }
                currentSongIndex = randomIndex;
                break;
            default:
                currentSongIndex += tag;
                if (currentSongIndex >= playList.length) currentSongIndex = 0;
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        }
        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));

        dispatch(getLyricAction(currentSong.id))
    }
};

const changeLyricAction = lyric => ({
    type: actionTypes.CHANGE_LYRIC,
    lyric
});

// 改变当前行歌词
export const changeLyricItemIndexAction = index => ({
    type: actionTypes.CHANGE_LYRIC_ITEM_INDEX,
    lyricItemIndex: index
})

// 获取歌词
const getLyricAction = id => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyric = parseLyric(res.lrc?.lyric);
            console.log(lyric);
            if (!lyric) {
                message.info({
                    key: 'lyric',
                    className: 'message-lyric',
                    content: '纯音乐，请欣赏',
                    duration: 0
                })
            }
            dispatch(changeLyricAction(lyric));
        })
    }
};

export const getCurrentSongAction = (ids) => {
    return (dispatch, getState) => {
        // i.先在列表查找该歌曲是否已有
        const playList = getState().getIn(['player', 'playList']);
        const songIndex = playList.findIndex(song => song.id === ids);
        let song = null;
        //2.判断逻辑
        if (songIndex === -1) { //未找到
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0];
                if (!song) return;
                // console.log(res);
                //将新歌曲加入播放列表
                const newPlayList = [...playList];
                newPlayList.push(song);
                //更新redux中的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSongAction(song))
            })
        } else {
            song = playList[songIndex];
            dispatch(changeCurrentSongIndexAction(songIndex));
            dispatch(changeCurrentSongAction(song));
        }

        //3、请求歌曲歌词
        dispatch(getLyricAction(ids))
    }
};

// 获取歌单列表(热门推荐)
export const getPlaylistDetailAction = playlistId => {
    return dispatch => {
        getPlaylistDetail(playlistId).then(res => {
            const newPlayList = res?.playlist?.tracks;
            if (!newPlayList) {
                message.error({
                    content: '获取歌单列表失败！'
                })
                return;
            }
            dispatch(changePlayListAction(newPlayList));
            dispatch(changeCurrentSongAction(newPlayList[0]));
            dispatch(changeCurrentSongIndexAction(0));
            dispatch(getLyricAction(newPlayList[0]?.id));
        })
    }
}

// 获取新碟详情
export const getDiscDetailAction = discId => {
    return dispatch => {
        getDiscDetail(discId).then(res => {
            const newPlayList = res?.songs;
            console.log(newPlayList);
            if (!newPlayList) {
                message.error({
                    content: '获取新碟详情失败！'
                })
                return;
            }
            dispatch(changePlayListAction(newPlayList));
            dispatch(changeCurrentSongAction(newPlayList[0]));
            dispatch(changeCurrentSongIndexAction(0));
            dispatch(getLyricAction(newPlayList[0]?.id));
        })
    }
}

