import request from './request';

// 轮播图
export function getBanners() {
  return request({
    url: '/banner'
  })
}

// 热门推荐
export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewDiscs(limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

// 榜单详情（此为新接口，与获取歌单详情接口一致）
export function getRankings(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

// 歌手
export function getArtists(limit) {
  return request({
    url: '/top/artists',
    params: {
      limit
    }
  })
}

// 所有榜单
export function getToplist() {
  return request ({
    url: '/toplist'
  })
}