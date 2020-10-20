
//var nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
//var nowDate2 = moment().format('YYYY년 MM월 DD일 HH시 mm분 ss초');
//console.log(nowDate);
//console.log(nowDate2);
// ISO Date - 2020-10-20 21:04:10
// 2020년 10월 20일 21시 04분 10초

const moment = require('moment'); //alt누르고 화살표로 이동가능

const nowDateIso = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss'); //alt+shift+화살표아래키 하면 복사
}
const nowDateKorean = () => {
    return moment().format('YYYY년 MM월 DD일 HH시 mm분 ss초');
}

//const obj = {moment, nowDateIso, nowDateKorean}
//module.exports = obj;


module.exports = {moment, nowDateIso, nowDateKorean}