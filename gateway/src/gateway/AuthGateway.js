// src/gateway/AuthGateway.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'mySecretKey';

// 임시 Mock DB (파일럿용)
const mockDB = {
  'test@example.com': { password: '1234', nickname: 'TestUser' },
  'admin@example.com': { password: 'abcd', nickname: 'AdminUser' },
};

class AuthGateway {
  // (1) 로그인 -> JWT 발급
  login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email & password required' });
    }

    // 실제론 MySQL/Mongo 등 DB에서 조회
    const user = mockDB[email];
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // JWT 발급
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ message: 'Login success', token });
  }

  // (2) 프로필 조회
  profile(req, res) {
    const { email } = req.user; // checkJWT에서 주입한 user
    const user = mockDB[email];
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({
      email,
      nickname: user.nickname,
    });
  }

  // (3) 주문 목록
  orders(req, res) {
    // 실제론 order-service로 프록시할 수도 있음
    return res.json([
      { orderId: 1, item: 'Apple', qty: 3 },
      { orderId: 2, item: 'Banana', qty: 5 },
    ]);
  }

  // (4) 홈
  home(req, res) {
    return res.send('API Gateway Home');
  }
}

module.exports = new AuthGateway();
