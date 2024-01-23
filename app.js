require("dotenv").config();
const express = require("express");
const connect = require("./schemas");// 몽고디비를 접속을 해야 하므로 가지고 옴


const app = express();
app.use(express.json());

connect(); // 실제로 몽고디비에 접속


//라우터 설정
const router = require("./routes/products.router");
app.use("/api", router);

app.listen(3000,() => {
    console.log("서버 오픈");
});