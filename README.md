# Java_msa_project
- Java 기반 MSA 프로젝트 개발

## 프로젝트 목적
- 이 프로젝트는 학습 및 포트폴리오 용도로 제작된 간단한 음료 주문 제작 서비스입니다.  
- 실제 상용 프로젝트와는 무관하며, 특정 기업의 데이터를 참조하거나 활용하지 않았습니다.

## MSA 서비스 목록
- 영업 서비스
- 제조 서비스
- 재고 서비스

## 개발 목적
- 기존 모노폴리 방식에서 MSA의 대한 이해를 터득하기 위해 간단한 서비스를 개발한다.
- 음료 주문 제작 서비스에서는 각각의 전문 시스템으로 나눠 진행하도록 한다.

## 프로세스
- 고객사 주문 -> 발주 -> 재고 확인 -> 제조 -> 배송사 전달 -> 배송 확정

## 서비스 영역
- 영업서비스
  - 주문 내역 (인터페이스 연동) - 랜덤 데이터 생성
  - 발주 관리 (재고 관리, 음료 등)
  - 매출액
- 제조 서비스
  - 자재 관리 (완제품/원재료/반제품)
  - 레시피 관리
  - 제조 관리
- 재고 서비스
  - 재고 관리 (자재 관리 규격)
  - 입고 (자재 입고)
  - 출고 (자재 출고)

## 요구사항
- 간단한 음료 주문 제작 서비스를 제작한다
- 콜라, 사이다, 환타, 오랜지 주스, 소주 등 다양한 음료를 판매한다.
- 재고가 충분할 경우 즉시 출고 가능 그렇지 않을경우 제조 후 출고
- 자재가 부족한 경우 필요 자재를 발주 받아 입고,
- 결론은 음료 공장을 위한 서비스를 개발하여라.


## 사용 기술 스택

| **분야**        | **기술 스택**                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------------|
| **프론트엔드**  | TypeScript, React, Recoil, React-Query, HTML, CSS, TailwindCSS, Material UI                     |
| **백엔드**      | Java 17, Spring Boot 3.4.1                                                        |
| **DB**          | Redis, MySQL                                                                                   |
| **Infra**       | AWS, Route 53, Nginx,                                                                     |
| **API**         | Kakao API, Google API, Naver API, OPENAI API                                                    |
| **기타**        | SSE, Web Socket, SEO                                                                            |



## 프로젝트 구성도

```
Project/
├── msa-sales/      # 영업 서비스 프로젝트
├── msa-menuf/      # 제조 서비스 프로젝트
└── msa-stock/      # 재고 서비스 프로젝트
```


