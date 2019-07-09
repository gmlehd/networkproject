const express = require('express');


var router = express.Router();

router.get('/', function(req, res){
    res.render('login', {title: 'login page'}); //플랫폼 웹페이지에 표시
});


router.post('/', function(req, res){
    var pool = require('./models/pool');

    //req.body에 넣어지는 데이터를 id,pw,name에 저장
    var input_id = req.body.id;
    var input_pw = req.body.pw;
    var input_name = req.body.name;

    //query실행할때
    pool.getConnection(function(err, con){
        if(err){
            console.log(err.message);
            con.release();
            return;
        }

        pool.query("insert into client values('" + input_id + "', '" + input_name + "', '" + input_pw + "', 0, 0, 0)", function(err, result){
            if(err){
                console.log(err.message);
                con.release();
                return;
            }

            res.send('회원가입 완료');
            con.release(); //
        })
    })
});