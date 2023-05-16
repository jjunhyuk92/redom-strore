const { Pool } = require('pg');
const mybatisMapper = require('mybatis-mapper');
const fs = require('fs');
const path = require('path');

// PostgreSQL 데이터베이스 연결 설정
const pool = new Pool({
    host: 'pg1101.gabiadb.com', // 호스트 이름
    user: 'redom', // 사용자 이름
    database: 'redom', // 데이터베이스 이름
    password: 'fpeha2720@', // 암호
    port: 5432, // 포트 번호
});

// mybatis 설정 로드
// mybatisMapper.createMapper(
//   // fs.readFileSync('./mybatis-config.xml', 'utf8')
//   // fs.readFileSync(path.join('/mybatis-config.xml'), 'utf8')
//   fs.readFileSync(path.join('/mybatis-config.xml'), 'utf8')
// );
// console.log('--------------')
// console.log(__dirname)
// mybatisMapper.createMapper([path.join(__dirname, '/mybatis-config.xml')]);

module.exports = {  
  query: (text: string, params: object) => pool.query(text, params),
  // getMapper: () => { return mybatisMapper }
};