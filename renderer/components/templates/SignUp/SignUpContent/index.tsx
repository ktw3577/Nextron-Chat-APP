import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { LOGIN } from "../../../../constants/routes";
import { auth } from "../../../../firebaseconfig";

export default function SignUpContent() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  const onChangeEmail = (email: string) => {
    setEmail(email);
  };
  const onChangePassword = (password: string) => setPassword(password);

  const trySignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        alert("회원가입이 완료되었습니다. 이메일로 로그인해주세요.");
      }
    } catch (e) {
      console.log(e);
    } finally {
      router.push(LOGIN);
    }
  };

  return (
    <Layout
      onSubmit={(e) => {
        e.preventDefault();
        trySignUp();
      }}
    >
      <TitleTextContainer>
        <TitleText>회원가입</TitleText>
        <TitleSubText>이메일로 간편하게 회원가입!</TitleSubText>
      </TitleTextContainer>
      <InputContainer>
        <InputBox>
          <StyledInput
            type="email"
            placeholder="이메일"
            onChange={(email) => onChangeEmail(email.target.value)}
          />
        </InputBox>
        <InputBox>
          <StyledInput
            type="password"
            placeholder="패스워드(6자이상)"
            onChange={(password) => onChangePassword(password.target.value)}
          />
        </InputBox>
      </InputContainer>
      <ButtonContainer>
        <LoginButton onClick={trySignUp}>회원가입</LoginButton>
      </ButtonContainer>
      <LinkContainer>
        <LinkWrap>
          <Link href={LOGIN}>
            <LinkText>로그인 페이지로</LinkText>
          </Link>
        </LinkWrap>
      </LinkContainer>
    </Layout>
  );
}

const Layout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 350px;
  margin: 50px 0;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: 5px;
`;
const TitleTextContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const TitleText = styled.div`
  color: ${({ theme }) => theme.color.primaryThick};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
const TitleSubText = styled.div``;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-top: 8px;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 10px;
  outline: 0;
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
  color: white;
  background-color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryLight};
  }
  transition: all 0.15s ease-in-out;
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
const LinkText = styled.span`
  color: ${({ theme }) => theme.color.primaryThick};
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
  cursor: pointer;
`;
