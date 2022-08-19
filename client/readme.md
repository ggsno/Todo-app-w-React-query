# Todo app

- 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제
- 리팩터링 기록 : https://fffo.tistory.com/tag/CRUD%20w%20ReactQuery
- 사용 기술 : <img src="https://img.shields.io/badge/React-61DAFB?style=plastic&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=plastic&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=plastic&logo=reactquery&logoColor=white"/>  <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=plastic&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=plastic&logo=styledcomponents&logoColor=white"/>
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
### Server
``` yarn```

``` yarn start```
### Client
``` yarn```

``` yarn dev```

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
src
├─components  // view 

│  ├─auth

│  ├─common

│  ├─layout
│  └─todo
├─hooks // 공통 hooks
├─model // 도메인 스키마
├─pages // 페이지 단위 뷰
│  ├─auth
│  └─todo
├─router
├─services // 서버 관련 코드
│  ├─api // 서버 api
│  └─hooks // 서버 데이터를 받아오는 리액트쿼리 hooks
└─utils


## 참고 사항

- 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않음 (모든 유저가 하나의 Todo를 가짐)

