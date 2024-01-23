const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose");
dotenv.config();

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_url = process.env.DB_URL;

const DB_HOST = `mongodb+srv://${db_user}:${db_password}@${db_url}`;


const connect = () => {
  // mongoose.connect는 MongoDB 서버에 연결하는 메서드입니다.
  mongoose
    .connect(
      // 빨간색으로 표시된 부분은 대여한 ID, Password, 주소에 맞게끔 수정해주세요!
   DB_HOST,//  "mongodb+srv://cic96:aaa1234@express-mongo.opgpwgb.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: 'node_lv1', // node_lv1 데이터베이스명을 사용합니다.
      },
    )
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB 연결 에러', err);
});

module.exports = connect;