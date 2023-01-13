import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Next = () => {
  return (
    <Layout>
      <Head>
        <title>Next(Typescript)</title>
      </Head>
      <Title>Next 페이지입니다.</Title>
      <Link href={"/home"}>
        <a> Home으로 가기</a>
      </Link>
    </Layout>
  );
};

export default Next;

const Layout = styled.div``;
const Title = styled.div`
  display: center;
  color: red;
`;
