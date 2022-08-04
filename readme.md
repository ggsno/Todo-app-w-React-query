# Todo App

- Wanted pre-onboarding challenge frontend course prior assignments
- source : https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api

## Getting started

### client
```
git clone https://github.com/ggsno/wanted-pre-onboarding-challenge-fe-1.git
yarn
yarn dev
```
### server 
```
git clone https://github.com/ggsno/wanted-pre-onboarding-challenge-fe-1-api.git
yarn
yarn start
```

## Feature

### Auth
- Log in/join api call
- Disable button on invalid entry at login/member registration
- Keep tokens in localstorage at login. Remove token from localstorage when logged out
- Notify user when token is invalid and redirect to login page

### Todo
- Implement CRUD
- Remain current state on refresh
- Implemented so that you can check the details of the ToDo List and individual ToDo within one screen
- Individual Todos can be viewed through the back of the page in order of inquiry
- Enables data to be consistent without refreshing within a single page
- The content of the modified Todo is reflected in the list in real time

## note
- The login/membership function only adds the user to the DB and returns the JWT token as a response, but does not manage the ToDo list relative to the actual user (all users have one ToDo)
---

# Todo app
- 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제
- 출처 : https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api

## 시작하기
### client
```
git clone https://github.com/ggsno/wanted-pre-onboarding-challenge-fe-1.git
yarn
yarn dev
```
### server 
```
git clone https://github.com/ggsno/wanted-pre-onboarding-challenge-fe-1-api.git
yarn
yarn start
```

## 구현 기능

### auth
- 로그인/회원가입 api 호출
- 로그인/회원가입 시 유효하지 않은 입력 시 버튼 비활성화
- 로그인 시 토큰을 localstorage에 보관함. 로그아웃시 localstorage에서 토큰 제거
- 유효하지 않은 토큰일 시 사용자에게 알리고 로그인 페이지로 리다이렉트

### todo
- CRUD 구현
- 새로고침 시에도 현재 상태 유지
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 구현
- 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 구현
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현
- 수정되는 Todo의 내용이 목록에서도 실시간으로 반영

## 참고 사항
- 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않음 (모든 유저가 하나의 Todo를 가짐)
