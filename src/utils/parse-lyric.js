/* 
[00:00.000] 作词 : 陈壹千 \n
[00:01.000] 作曲 : 陈壹千 \n
[00:13.01] \n
[00:14.56]剖析无数遍自己 \n  => 解析成 [
                                {
                                    time: [00:14.56],
                                    content: 剖析无数遍自己
                                }
                            ]
 */
const parseEXP = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString) {
    const lyricArray = lyricString?.split('\n');
    console.log(lyricArray);
    let lyricList = [];
    for (let k of lyricArray) {
        if (k) {
            const parseTime = parseEXP.exec(k);
            //全部时间转为毫秒数
            const time1 = parseTime[1] * 60 * 1000;
            const time2 = parseTime[2] * 1000;
            const time3 = parseTime[3].length === 3 ? parseTime[3] * 1 : parseTime[3] * 10;
            const time = time1 + time2 + time3;
            const content = k.replace(parseEXP, '').trim();
            const lyricObject = { time, content };
            lyricList.push(lyricObject);
        }
    }
    return lyricList;
}