import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import UserAvatar from "../../../../assets/Icons/user_avatar.svg";
import { auth } from "../../../../firebaseconfig";
import useMakeRoomTitle from "../../../../Utils/useMakeRoomTitle";

type Props = {
  readonly chat: {
    readonly id: string;
    readonly chatRoomMember: [string];
  };
};

export default function ChatRoom({ chat }: Props) {
  const router = useRouter();
  const { id, chatRoomMember } = chat;
  const userEmail = auth?.currentUser?.email;
  const RoomTitle = useMakeRoomTitle(chatRoomMember, userEmail);

  const moveToChatRoom = (id: string) => {
    router.push({ pathname: "/chat/[id]", query: { id } });
  };

  return (
    <Layout onClick={() => moveToChatRoom(id)}>
      <ChatRoomImgContainer>
        <StyledImage src={UserAvatar} />
      </ChatRoomImgContainer>
      <ChatRoomTitleConatiner>
        <ChatRoomTitle>{RoomTitle}</ChatRoomTitle>
      </ChatRoomTitleConatiner>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  padding: 5px;
  border-radius: 3px;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray2};
  }
  cursor: pointer;
`;
const StyledImage = styled(Image)``;
const ChatRoomImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ChatRoomTitleConatiner = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  align-items: center;
  margin-left: 5px;
`;
const ChatRoomTitle = styled.span`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
