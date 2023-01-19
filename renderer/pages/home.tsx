import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { CHAT, LOGIN, SIGN_UP } from "../constants/routes";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";

export default function Home() {
  const trySignOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <Container>
        <LinkItem>
          <Link href={LOGIN}>
            <Text>로그인 페이지로 이동</Text>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href={SIGN_UP}>
            <Text>회원가입 페이지로 이동</Text>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href={"/chat/default"}>
            <Text>채팅창으로 이동</Text>
          </Link>
        </LinkItem>
        <SignOutContainer>
          <SignOut onClick={trySignOut}>로그아웃</SignOut>
        </SignOutContainer>
      </Container>
    </Layout>
  );
}

const Layout = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkItem = styled.div`
  & + & {
    margin-top: 5px;
  }
  padding: 5px;
`;
const Text = styled.a`
  color: blue;
`;
const SignOutContainer = styled.div`
  margin-top: 5px;
`;
const SignOut = styled.div``;
