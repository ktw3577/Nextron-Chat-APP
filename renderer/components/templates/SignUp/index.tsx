import styled from "styled-components";
import SignUpContent from "./SignUpContent";

export default function SignUpForm() {
  return (
    <Layout>
      <SignUpContent />
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
