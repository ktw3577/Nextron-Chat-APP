import Image from "next/image";
import styled from "styled-components";
import UserAvatar from "../../../../../assets/Icons/user_avatar.svg";
import Logout from "../../../../../assets/Icons/logout.svg";
import theme from "../../../../../styles/theme";
import { auth } from "../../../../../firebaseconfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { LOGIN } from "../../../../../constants/routes";

export default function UserBox() {
  const router = useRouter();
  const user = auth.currentUser;

  const trySignOut = async () => {
    try {
      await signOut(auth);
      router.push(LOGIN);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <UserContainer>
        <UserAvatarContainer>
          <StyledImage src={UserAvatar} color={theme.color.gray} />
        </UserAvatarContainer>
        {user && user.email && (
          <UserEmailContainer>
            <UserEmail>{user.email}</UserEmail>
          </UserEmailContainer>
        )}
      </UserContainer>
      <LogoutContainer onClick={trySignOut}>
        <StyledImage src={Logout} />
      </LogoutContainer>
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;
const UserAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledImage = styled(Image)``;
const UserEmailContainer = styled.div`
  margin-left: 5px;
`;
const UserEmail = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.primaryThick};
`;
const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 30px;
  background-color: ${({ theme }) => theme.color.gray};
  border-radius: 2px;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray2};
  }
  cursor: pointer;
`;
