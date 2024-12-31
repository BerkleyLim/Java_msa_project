# Gateway

- 이 서버는 API Gateway 역할을 합니다.
- 현재는 Node.js로 구현되어 있습니다.
- Express 로 활용하여 구성 되었고, 단순히 중계기 역할만을 합니다.
- 현재는 서버가 1개이기 때문에 별도의 로드밸런싱은 없습니다.
- 추후에 서버가 늘어날 경우, 로드밸런싱을 고려해야 합니다.
- 나중에 서비스가 커질 경우 Kong API Gateway를 사용할 예정입니다.

## 디렉토리 구조

```
src/
├── app.js                # Express 앱 실행
├── config/
│   └── db.config.js      # DB 연결(파일럿/Mock/실DB)
├── gateway/
│   └── AuthGateway.js    # 실제 게이트웨이 로직(로그인, 프로필, 주문 등)
└── router/
    └── routes.js         # 라우트 정의 (POST/GET 등)
```

## 기술 스택

- Node.js, Express, JWT
