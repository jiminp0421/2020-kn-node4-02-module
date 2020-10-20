const path = require('path'); //경로가 안붙으면 node.module에서 불러온다
const express = require('express'); //      //



const {nowDateIso, nowDateKorean} = require('./modules/sample'); //구조분해할당

//내가 필요한 함수들을 모듈로 만들어놓고 익스포트 시킨 이후에 임포트한것.
const dt = require('./modules/sample'); //modules에있는 sample.js를 불러와 상대경로 안쓰면 node.modules에 있는 sample을 찾아오니 주의
//sample.js에 module.exports = {moment, nowDateIso, nowDateKorean}라고 생각하면 돼!

console.log(dt.nowDateIso());
console.log(dt.nowDateKorean());