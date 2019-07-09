const express = require('express');
const logger = require('morgan');
// const favicon = require('serve-favicon');
const path = require('path');
const serveStatic = require('serve-static');

var app = express(); 

app.use(logger('dev')); // 로깅처리 = 로그를 보여준다
app.use(express.static(__dirname + '/public')); //정적파일(css,image등)처리
app.use(serveStatic(path.join(__dirname, 'public'))); // 정적 파일 처리
app.use(express.urlencoded({extended: true})); // body data 파싱
//app.use(favicon(path.join(__dirname, 'public/images','favicon.ico'))); // 파비콘 세팅

app.set('view engine', 'ejs'); //view engine을 ejs사용함
app.set('views', './views'); //ejs파일이 views폴더에 있음

//localhost::8080에서 root출력
app.get('/', function(req, res){
    res.send('root'); //텍스트 출력
}); 

//localhost::8080/login에서 login page출력
var login = require('./route/login');
app.use('/login', login);

//웹페이지에서 오는 데이터 처리
//app.post('/login', );

app.listen(8080, function(){
    console.log(8080 + ' 포트에서 대기중');
})