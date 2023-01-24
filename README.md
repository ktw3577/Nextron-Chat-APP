<h1 align="center"> 💬Nextron, Firebase를 이용한 Desktop Chat APP 입니다.💬 </h1>

> Discord, Slack과 같은 Desktop메신저앱을 체험해보고자 Nextron(Nextjs + Electron)을 이용해 프론트를 구축하였고
> Firebase(Authentication, Cloud Firestore)를 이용해 백엔드부분을 해결하였습니다.

## 목차

- [시작 방법](#ch1)
- [기술 스택](#ch2)
- [주요 기능](#ch3)

# How to Start <a id="ch1"></a>

## 🔧 Install

```sh
$ yarn
```

## 📋 Notice

-- 본 App에서는 Firebase를 사용하고있어, 개인 Firebase config설정이 담긴 .env파일이 필요합니다. 따라서 아래의 조건을 만족해야 앱구동이 가능합니다.
1. Firebase에서 프로젝트 추가.
2. 생성한 프로젝트에서 앱 추가 -> 웹 선택후 전부 완료시 생성된 config설정으로 /renderer 경로에 .env파일을 생성.
3. FireStore Database생성.
4. FireStore Database 규칙에서 아래와 같이 규칙을 수정해줍니다.
```sh
allow read, write: if false; --> allow read, write: if true;
```
5. 끝입니다!

## 🚀 Run App

```sh
$ yarn dev
```
## 👨‍💻 기술 스택 <a id="ch2"></a>
<img alt="nextjs" src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img alt="Electron" src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=Electron&logoColor=white"/> <img alt="TypeScript" src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img alt="styled-components" src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img alt="Firebase
" src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/>

## 주요 기능 <a id="ch3"></a>

| 회원가입                                                              |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/9GzPKMw/Adobe-Express-2.gif" alt="signup" border="0" width="700"> |

| 로그인                                                              |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/GFtNhKX/Adobe-Express-1.gif" alt="login" border="0" width="700"> |

| 1:1채팅 초대                                                              |
| -------------------------------------------------------------------------- |
|<img src="https://i.ibb.co/c2hm5Cf/Adobe-Express.gif" alt="chat-invite" border="0" width="700"> |

| 1:1채팅                                                              |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/6nVPrhS/Adobe-Express-1.gif" alt="chat" border="0" width="700">|

| 그룹채팅 초대                                                             |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/VCVhPJ9/Adobe-Express.gif" alt="group-chat-invite" border="0" width="700"> |

| 그룹채팅                                                             |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/2PYn5t0/Adobe-Express.gif" alt="group-chat" border="0" width="700">|
