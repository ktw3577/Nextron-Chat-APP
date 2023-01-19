import Image from "next/image";
import styled from "styled-components";
import UserAvatar from "../../../../../../assets/Icons/user_avatar.svg";

type Props = {
  readonly member: string;
};

export default function MemberItem({ member }: Props) {
  return (
    <Layout>
      <MemeberAvatarContainer>
        <MemberAvatar src={UserAvatar} width={35} height={35} />
      </MemeberAvatarContainer>
      <MemberEmailContainer>
        <MemberEmail>{member}</MemberEmail>
      </MemberEmailContainer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 5px;
  }
`;
const MemeberAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MemberAvatar = styled(Image)``;
const MemberEmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;
const MemberEmail = styled.span``;
