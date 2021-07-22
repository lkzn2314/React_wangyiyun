export function formatImgSize(imgUrl, size = 140) {
  return `${imgUrl}?param=${size}x${size}`;
}