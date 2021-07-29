import * as actionTypes from './constants';

import { getSongDetail } from '@/network/player';

const changeCurrentSongAction = song => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: song
});

const changeCurrentSongIndexAction = index => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex: index
});

const changePlayListAction = playList => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
});

export const getCurrentSongAction = (ids) => {
    return (dispatch, getState) => {
        // i.先在列表查找该歌曲是否已有
        const playList = getState().getIn(['player', 'playList']);
        const songIndex = playList.findIndex(song => song.id === ids);
        //2.判断逻辑
        if (songIndex === -1) { //未找到
            getSongDetail(ids).then(res => {
                const song = res.songs && res.songs[0];
                if (!song) return;
                console.log(res);
                //将新歌曲加入播放列表
                const newPlayList = [...playList];
                newPlayList.push(song);
                //更新redux中的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSongAction(song))
            })
        } else {
            const song = playList[songIndex];
            dispatch(changeCurrentSongIndexAction(songIndex));
            dispatch(changeCurrentSongAction(song));
        }
    }
}

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const changeMusicAction = tag => {
    return (dispatch, getState) => {
        const sequence = getState().getIn(['player', 'sequence']);
        let currentSongIndex = getState().getIn(['player', 'currentSongIndex']);
        const playList = getState().getIn(['player', 'playList']);

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
    }
}