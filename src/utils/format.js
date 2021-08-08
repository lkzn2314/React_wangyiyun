// 请求图片格式化尺寸
export function formatImgSize(imgUrl, size = 140) {
  return `${imgUrl}?param=${size}x${size}`;
};

// 请求歌曲流媒体
export function getSongPlay(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

// 时间格式化
export function formatDate(timeStamp, fmt) {
  let date = new Date(timeStamp);
  //年份处理
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1, //月
    'd+': date.getDate(), //日   getDay()返回的是一周中的星期几
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

// 歌词滚动函数
export function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}