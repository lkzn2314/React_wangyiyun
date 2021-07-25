import request from './request';

export function getBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewDiscs(limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

export function getRankings(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}