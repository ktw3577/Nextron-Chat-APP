import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { CHAT, LOGIN, NEXT, SIGN_UP } from "../constants/routes";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <Container>
        <LinkItem>
          <StyledLink href={NEXT}>
            <Text>NEXT페이지로 이동</Text>
          </StyledLink>
        </LinkItem>
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
          <Link href={CHAT}>
            <Text>채팅창으로 이동</Text>
          </Link>
        </LinkItem>
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
const StyledLink = styled(Link)``;
