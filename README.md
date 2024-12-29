# Java_msa_project
이 프로젝트는 **마이크로서비스 아키텍처(MSA)**를 기반으로 구축된 간단한 음료 주문 제작 서비스입니다. MSA는 하나의 애플리케이션을 작고 독립적으로 배포 가능한 여러 개의 서비스로 분리하여 개발하는 아키텍처 스타일입니다. 이를 통해 시스템의 유연성, 확장성, 재사용성을 높일 수 있습니다.


## 프로젝트 목적
* MSA 개념 이해 및 실습
* 분산 시스템 설계 및 개발 경험 쌓기
* 스프링 부트를 활용한 마이크로서비스 개발
* 다양한 기술 스택 통합 및 활용

## **핵심 기능:**
* **주문 관리:** 실시간 주문 접수 및 상태 추적
* **재고 관리:** 실시간 재고 조회 및 자동 발주
* **제조 관리:** 레시피 기반 제조 및 생산 관리

## 프로세스
- 고객사 주문 -> 발주 -> 재고 확인 -> 제조 -> 배송사 전달 -> 배송 확정

## 아키텍처
[이미지 첨부]


### 서비스 구성

* **영업 서비스:** 고객 주문 접수, 주문 정보 관리, 매출 관리 등을 담당합니다.
  * **주요 기능:** 주문 생성, 주문 상태 변경, 결제 처리
  * **데이터 모델:** 주문(orderId, customerId, items, status), 고객(customerId, name, address)
* **제조 서비스:** 자재 관리, 레시피 관리, 제조 관리를 담당합니다.
  * **주요 기능:** 자재 관리, 레시피 관리, 제조 관리
  * **데이터 모델:** 자재(materialId, name, quantity), 레시피(recipeId, name, ingredients)
* **재고 서비스:** 재고 관리, 자재 입고, 자재 출고를 담당합니다.
  * **주요 기능:** 재고 관리, 자재 입고, 자재 출고
  * **데이터 모델:** 재고(stockId, materialId, quantity), 입고(receiptId, materialId, quantity), 출고(shipmentId, materialId, quantity)

### 요구사항
- 간단한 음료 주문 제작 서비스를 제작한다
- 콜라, 사이다, 환타, 오랜지 주스, 소주 등 다양한 음료를 판매한다.
- 재고가 충분할 경우 즉시 출고 가능 그렇지 않을경우 제조 후 출고
- 자재가 부족한 경우 필요 자재를 발주 받아 입고,
- 결론은 음료 공장을 위한 서비스를 개발하여라.

### 기술 스택

| **분야**        | **기술**                                                    | **선택 이유**                             | **활용 부분**                        |
|-----------------|------------------------------------------------------------|------------------------------------------|---------------------------------------|
| **프론트엔드**  | TypeScript, React, Zustand, React Query, Tailwind CSS, Material UI | 최신 기술 스택, 간결하고 확장 가능한 상태 관리 | UI 개발, 상태 관리, 데이터 페칭       |
| **백엔드**      | Java 17, Spring Boot 3.4.1, Spring Cloud (Config Server, Eureka), Node.js, Express.js | 확장성 및 다양한 기능 제공, 생산성 향상       | API 개발, 데이터 처리                 |
| **DB**          | Redis, MySQL, MongoDB                                      | 빠른 데이터 접근(캐싱), 관계형 및 비정형 데이터 처리 | 캐싱, 데이터 저장, 비정형 데이터 관리  |
| **Infra**       | AWS, Route 53, Nginx                                       | 클라우드 확장성, 안정성                     | 배포, 도메인 관리, 로드 밸런싱         |
| **메시징**      | RabbitMQ, Kafka (필요시)                                   | 비동기 메시지 처리, 대규모 데이터 처리         | 실시간 메시징, 이벤트 기반 아키텍처 구현 |
| **기타**        | SSE, WebSocket, SEO                                        | 실시간 데이터 전송, 검색 엔진 최적화           | 실시간 통신, 검색 최적화              |


### 프로젝트 구성도

```
Project/
├── msa-sales/       # 영업 서비스 (Order, Payment)
├── msa-manufact/    # 제조 서비스 (Material, Recipe)
├── msa-stock/       # 재고 서비스 (Stock, Inventory)
├── gateway/         # API Gateway (Node.js + Express.js)
├── config-server/   # Spring Cloud Config Server (공통 설정)
├── discovery/       # Eureka Service Discovery
├── rabbitmq/        # RabbitMQ for messaging
└── msa-front/       # React 프론트엔드 프로젝트
```


### 블로그 스토리
1. [MSA 파일럿 프로젝트 - 소개 편](https://velog.io/@berkleylim/1-MSA-%ED%8C%8C%EC%9D%BC%EB%9F%BF-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%86%8C%EA%B0%9C-%ED%8E%B8)


