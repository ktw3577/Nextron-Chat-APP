import styled from "styled-components";
import LogInContent from "./LoginContent";

export default function LoginForm() {
  return (
    <Layout>
      <LogInContent />
    </Layout>
  );
}

const Layout = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
