//mysql을 사용하기 위해
module.exports = require('mysql').createPool({
    connectionLimit: 10, //최대 연결 갯수
    user: 'root',
    password: '020402',
    database: 'test'
})