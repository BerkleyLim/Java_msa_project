// src/router/routes.js
const express = require('express');
const router = express.Router();

// AuthGateway를 import
const AuthGateway = require('../gateway/AuthGateway');

// JWT 검증 미들웨어(파일럿용)
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'mySecretKey';

function checkJWT(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'No Authorization header' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid or expired' });
  }
}

// ──────────────────────── 라우트 선언 ────────────────────────

// (1) 로그인 (POST /login)
router.post('/login', (req, res) => {
  AuthGateway.login(req, res);
});

// (2) 프로필 (GET /profile) -> JWT 필요
router.post('/profile', checkJWT, (req, res) => {
  AuthGateway.profile(req, res);
});

// (3) 주문 목록 (GET /orders) -> JWT 필요
router.post('/orders', checkJWT, (req, res) => {
  AuthGateway.orders(req, res);
});

// (4) 홈 (GET /)
router.post('/', (req, res) => {
  AuthGateway.home(req, res);
});

module.exports = router;
