const path = require('path'); //경로가 안붙으면 node.module에서 불러온다
const express = require('express'); //      //



const {moment, nowDateIso, nowDateKorean} = require('./modules/sample'); //구조분해할당

//내가 필요한 함수들을 모듈로 만들어놓고 익스포트 시킨 이후에 임포트한것.
const dt = require('./modules/sample'); //modules에있는 sample.js를 불러와 상대경로 안쓰면 node.modules에 있는 sample을 찾아오니 주의
const { allowedNodeEnvironmentFlags } = require('process');
const { response } = require('express');
//sample.js에 module.exports = {moment, nowDateIso, nowDateKorean}(비구조할당) 라고 생각하면 돼!

//console.log(nowDateIso());
//console.log(nowDateKorean());
//console.log(moment);

const memberRouter = require('./routes/member');

const notFound = path.join(__dirname, './public/404.html');

const app = express();
app.listen(3000, () => {console.log('http://127.0.0.1:3000');});

app.set('view engine', 'pug');//퍼그파일쓰기
app.set('views', './views');
app.locals.pretty = true;

app.use(express.json());
app.use(express.urlencoded({extended: false})); //계층구조로 만들어주는것

app.use((req, res, next) => {
		req.greeting = 'Hello';
		next();
});

// '/'루트로 들어온다면 미들웨어이다. 
app.use('/', express.static(path.join(__dirname, './public'))); //dirname = 현재폴더  //index가 있으면 이걸 보여주고 index가 없으면 아래 res가 있는 루트를 보여준다.

app.get('/sample', (req, res, next) => {
		// res.send('');
		// res.sendFile('절대경로');
		// res.redirect('/member');
		res.render('./sample.pug', {title: "PUG 연습"});
});

app.get('/book', (req, res, next) => {
	const pug = { books: [
		{id: 1, title: "별주부전", content: "거북이가 간을..."},
		{id: 2, title: "홍길동전", content: "아버지를 아버지라..."},
		{id: 3, title: "심청전", content: "아버지 심청이가..."},
		]};
	res.render('./book.pug', pug );
});

app.use('/member', memberRouter);


app.get('/time', (req, res, next) => {
		res.send(`<h1>${req.greeting} / ${nowDateIso()}</h1>`); //return이라고 보면돼! 서버는 응답해주면 끝
		//next(); //break같은거라고 보면된다. 예외처리할때 많이 사용.
});
/*
app.use((req, res)=>{ //(다 받아주는애. get이든 post든 뭐든) '/'가 없으면 알아서 무조건 들어온다. 내가구현한 루트가 없으니까!
		res.redirect('/404.html'); //없는 경로를 요청하면 우리가 만든 에러코드가 뜬다.
});*/

app.use((req, res, next)=>{  //next 인자는 다음번에 넘길때 사용.
		res.sendFile(notFound); //html이든 file이든 다 보여준다. 경로를 표현하는것들은 절대경로로 해줘야만 한다.
});

