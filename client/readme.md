# Todo app

- 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제
- 리팩터링 기록 : https://fffo.tistory.com/tag/CRUD%20w%20ReactQuery
- 사용 기술 : <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat&logo=reactquery&logoColor=white"/> <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat&logo=styledcomponents&logoColor=white"/>

## 최종 구현 화면

### 회원가입 및 로그인

![녹화_2022_08_19_20_55_05_298](https://user-images.githubusercontent.com/46833758/185613193-118671c2-0eab-4096-a165-61816e134dab.gif)

- 유효하지 않은 입력일 시 입력창 하단에 즉각 피드백
- 유효하지 않은 폼이 하나라도 존재하면 제출 버튼 비활성화
- 회원가입 성공시 todo list 화면으로 이동

### todo list

![녹화_2022_08_19_21_45_18_658](https://user-images.githubusercontent.com/46833758/185621435-a59c5f14-6215-46b7-8f33-7c4cb71fd486.gif)

- todo list에서 todo를 선택하면 todo details에 상세 정보를 보여줌
- todo 상세 정보는 새로고침을 해도 유지되며 뒤로가기로 이전에 선택했던 todo 상세 정보를 볼 수 있음

## 설치, 환경설정 및 실행 방법

현 폴더는 클라이언트이고 상위 폴더에 서버가 있음. 각각의 폴더에서 다음의 명령어 실행 후 client에 뜨는 포트 번호로 로컬호스트 접속

### Server

` yarn`

` yarn start`

### Client

` yarn`

` yarn dev`

## 구현 요구 사항 목록

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 사용한 프레임워크 및 라이브러리

### React Query(Tanstack Query)

- 서버 상태와 클라이언트 상태를 분리를 위함

### styled-components

- css를 jsx에 넣음으로써 간결한 폴더구조 구축을 위함

## 폴더 구조

```
src
├─components  // 컴포넌트 단위로 구현된 view, 각 컴포넌트에 필요한 state가 view와 함께 있음
│  ├─auth
│  ├─common
│  ├─layout
│  └─todo
├─hooks // 공통 hooks
├─pages // 페이지 단위 뷰
│  ├─auth
│  └─todo
├─router
├─services // 서버 관련 코드
│  ├─api // 서버 api
│  ├─hooks // 서버 데이터를 받아오는 리액트쿼리 hooks
│  └─model // 도메인관련 스키마
└─utils
```

## 주안점

### 서버의 데이터와 클라이언트의 데이터를 분리

- 기존에는 클라이언트의 state에 서버의 데이터를 fetch해서 사용함
  - state에 저장된 서버 데이터가 최신이라는 보장이 없기 때문에 항상 새로운 요청을 하거나 유효성 로직을 추가해야했음
- react query 라이브러리를 이용하면 서버의 데이터를 캐싱해 효율적인 서버 데이터관리가 가능함을 확인함

### 직관적인 코드 및 폴더구조

- 이해하기 쉬운 코드를 작성하고자 같은 과제를 수행하고있는 다른 레파지토리들을 보며 다양한 구조를 공부
  - 다른 레파지토리를 보며 내가 이해하기 어려웠던 부분은 왜 이해하기 어려운지, 내 구조는 이 부분에서 이해하기 쉬운지 고민
  - 좋은 구조들은 왜 좋았는지 생각해보고 그 부분을 내 코드에 적용
    - services라는 폴더에 서버 관련 코드를 넣어 사용하는 것을 봄. react-query가 추구하는 서버와 클라이언트 상태 분리에 적합한 구조라고 판단해 기존 구조에서는 src 최상위에 api와 hooks에 넣어져있던 서버 관련 코드들을 services로 이동함
    - model이라는 폴더에 도메인과 관련된 스키마들을 관리하는 것을 봄. 기존에 types 폴더에 있던 도메인관련 타입들을 model폴더에 넣고 관련된 쿼리 키(react-query의 캐시 키)도 함께 넣어서 관리함
- 라이브러리의 공식 문서에서 사용되는 함수명이나 변수명들을 참고해서 직관적인 코드 지향

## 한계점 및 개선 사항

### 에러 핸들링

- 각각의 에러에 더 적합한 행동을 구현할 수 있음

### 사용자 피드백 UI/UX

- 로딩시 로딩컴포넌트나 스켈레톤 미구현
- 에러시 대부분 alert가 나오도록 처리를 했는데 alert창은 닫힐 때 까지 다른 모든 인터페이스에 접근할 수 없으므로 중요한 상항(삭제, 수정 등 데이터가 변경되는 상황)이 아니라면 지양해야함

### 로직과 view 분리
- 현재 컴포넌트 단위로 로직과 view가 함께 있음. 하나의 컴포넌트에 종속적인 행동들을 하나의 파일로 관리하고자 이런 구조로 만들었지만 재사용 가능성과 관심사의 분리를 위해 따로 두는 편이 더 좋은 구조일 듯

## 참고 사항

- 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않음 (모든 유저가 하나의 Todo를 가짐)
