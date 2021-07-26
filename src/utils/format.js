export function formatImgSize(imgUrl, size = 140) {
  return `${imgUrl}?param=${size}x${size}`;
};

export function getSongPlay(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

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