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

// 榜单
export function getRankings(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
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