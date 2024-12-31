// src/app.js
require('dotenv').config();
const express = require('express');
const routes = require('./router/routes');

const app = express();
const PORT = process.env.PORT || 8111;

// 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우팅
app.use('/', routes);

// 서버 실행
app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
