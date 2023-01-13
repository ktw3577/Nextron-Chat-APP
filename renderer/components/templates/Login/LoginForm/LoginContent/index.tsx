import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { HOME, SIGN_UP } from "../../../../../constants/routes";
import MainLogo from "../../../../../assets/Icons/main-logo.png";

export default function LogInContent() {
  return (
    <Layout>
      <IconContainer>
        <Image src={MainLogo} />
      </IconContainer>
      <InputContainer>
        <StyledInput placeholder="이메일" />
        <StyledInput placeholder="패스워드" />
      </InputContainer>
      <ButtonContainer>
        <LoginButton>로그인</LoginButton>
      </ButtonContainer>
      <LinkContainer>
        <LinkWrap>
          <Link href={SIGN_UP}>이메일로 가입하기</Link>
        </LinkWrap>
        <LinkWrap>
          <Link href={HOME}>홈페이지로</Link>
        </LinkWrap>
      </LinkContainer>
    </Layout>
  );
}

const Layout = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledInput = styled.input`
  & + & {
    margin-top: 8px;
  }
  width: 360px;
  height: 45px;
`;
const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
`;

const LoginButton = styled.button`
  height: 100%;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;
const LinkWrap = styled.div`
  display: flex;
  align-items: center;
`;
