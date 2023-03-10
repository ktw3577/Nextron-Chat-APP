<h1 align="center"> ๐ฌNextron, Firebase๋ฅผ ์ด์ฉํ Desktop Chat APP ์๋๋ค.๐ฌ </h1>

> Discord, Slack๊ณผ ๊ฐ์ Desktop๋ฉ์ ์ ์ฑ์ ์ฒดํํด๋ณด๊ณ ์ Nextron(Nextjs + Electron)์ ์ด์ฉํด ํ๋ก ํธ๋ฅผ ๊ตฌ์ถํ์๊ณ 
> Firebase(Authentication, Cloud Firestore)๋ฅผ ์ด์ฉํด ๋ฐฑ์๋๋ถ๋ถ์ ํด๊ฒฐํ์์ต๋๋ค.

## ๋ชฉ์ฐจ

- [์์ ๋ฐฉ๋ฒ](#ch1)
- [๊ธฐ์  ์คํ](#ch2)
- [์ฃผ์ ๊ธฐ๋ฅ](#ch3)

# How to Start <a id="ch1"></a>

## ๐ง Install

```sh
$ yarn
```

## ๐ Notice

-- ๋ณธ App์์๋ Firebase๋ฅผ ์ฌ์ฉํ๊ณ ์์ด, ๊ฐ์ธ Firebase config์ค์ ์ด ๋ด๊ธด .envํ์ผ์ด ํ์ํฉ๋๋ค. ๋ฐ๋ผ์ ์๋์ ์กฐ๊ฑด์ ๋ง์กฑํด์ผ ์ฑ๊ตฌ๋์ด ๊ฐ๋ฅํฉ๋๋ค.
1. Firebase์์ ํ๋ก์ ํธ ์ถ๊ฐ.
2. ์์ฑํ ํ๋ก์ ํธ์์ ์ฑ ์ถ๊ฐ -> ์น ์ ํํ ์ ๋ถ ์๋ฃ์ ์์ฑ๋ config์ค์ ์ผ๋ก /renderer ๊ฒฝ๋ก์ .envํ์ผ์ ์์ฑ.
3. FireStore Database์์ฑ.
4. FireStore Database ๊ท์น์์ ์๋์ ๊ฐ์ด ๊ท์น์ ์์ ํด์ค๋๋ค.
```sh
allow read, write: if false; --> allow read, write: if true;
```
5. ๋์๋๋ค!

## ๐ Run App

```sh
$ yarn dev
```
## ๐จโ๐ป ๊ธฐ์  ์คํ <a id="ch2"></a>
<img alt="nextjs" src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img alt="Electron" src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=Electron&logoColor=white"/> <img alt="TypeScript" src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img alt="styled-components" src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img alt="Firebase
" src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/>

## ์ฃผ์ ๊ธฐ๋ฅ <a id="ch3"></a>

| ํ์๊ฐ์                                                              |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/9GzPKMw/Adobe-Express-2.gif" alt="signup" border="0" width="700"> |

| ๋ก๊ทธ์ธ                                                              |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/GFtNhKX/Adobe-Express-1.gif" alt="login" border="0" width="700"> |

| 1:1์ฑํ ์ด๋                                                              |
| -------------------------------------------------------------------------- |
|<img src="https://i.ibb.co/c2hm5Cf/Adobe-Express.gif" alt="chat-invite" border="0" width="700"> |

| 1:1์ฑํ                                                              |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/6nVPrhS/Adobe-Express-1.gif" alt="chat" border="0" width="700">|

| ๊ทธ๋ฃน์ฑํ ์ด๋                                                             |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/VCVhPJ9/Adobe-Express.gif" alt="group-chat-invite" border="0" width="700"> |

| ๊ทธ๋ฃน์ฑํ                                                             |
| -------------------------------------------------------------------------- |
| <img src="https://i.ibb.co/2PYn5t0/Adobe-Express.gif" alt="group-chat" border="0" width="700">|
