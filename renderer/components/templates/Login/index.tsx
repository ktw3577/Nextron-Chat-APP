import styled from "styled-components";
import LogInContent from "./LoginForm/LoginContent";

export default function LoginForm() {
  return (
    <Layout>
      <Container>
        <LogInContent />
      </Container>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
const Container = styled.div`
  padding-top: 40px;
`;
