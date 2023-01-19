import { Timestamp } from "firebase/firestore";
import Image from "next/image";
import styled from "styled-components";
import UserAvatar from "../../../../../../assets/Icons/user_avatar.svg";
import { auth } from "../../../../../../firebaseconfig";

type Props = {
  readonly sender: string;
  readonly text: string;
  readonly timestamp: Timestamp;
};

export default function ChatItem({ sender, text, timestamp }: Props) {
  const userEmail = auth?.currentUser?.email;
  const isMyChat = sender === userEmail;
  const chatDate = timestamp?.toDate().toLocaleTimeString().slice(0, 7);

  return (
    <Layout isMyChat={isMyChat}>
      <Container isMyChat={isMyChat}>
        <UserImageContainer>
          <UserImage src={UserAvatar} width={30} height={30} />
        </UserImageContainer>
        <ChatContainer>
          <ChatInfoContainer>
            <SenderContainer>
              <Sender>{sender}</Sender>
            </SenderContainer>

            <ChatTimeContainer>
              <ChatTime>{chatDate}</ChatTime>
            </ChatTimeContainer>
          </ChatInfoContainer>

          <UserChatContainer isMyChat={isMyChat}>
            <UserChatText isMyChat={isMyChat}>{text}</UserChatText>
          </UserChatContainer>
        </ChatContainer>
      </Container>
    </Layout>
  );
}

const Layout = styled.div<{ isMyChat: boolean }>`
  & + & {
    margin-top: 5px;
  }
  display: flex;
  flex-direction: ${({ isMyChat }) => (isMyChat ? "row-reverse" : "row")};
`;
const Container = styled.div<{ isMyChat: boolean }>`
  display: flex;
  flex-direction: ${({ isMyChat }) => (isMyChat ? "row-reverse" : "row")};
`;
const UserImageContainer = styled.div``;
const UserImage = styled(Image)``;

const ChatContainer = styled.div``;
const ChatInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 3px;
`;

const SenderContainer = styled.div``;
const Sender = styled.span`
  font-size: 13px;
`;

const ChatTimeContainer = styled.div`
  margin-left: 3px;
`;
const ChatTime = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.color.primaryLight};
`;

const UserChatContainer = styled.div<{ isMyChat: boolean }>`
  margin: ${({ isMyChat }) => (isMyChat ? "0 5px 0 0" : "0 0 0 5px")};
  border-radius: 10px;
  background-color: ${({ theme, isMyChat }) =>
    isMyChat ? theme.color.primaryLight : theme.color.gray};
  padding: 5px;
  max-width: 250px;
`;
const UserChatText = styled.span<{ isMyChat: boolean }>`
  min-width: 100px;
  color: ${({ isMyChat }) => (isMyChat ? "white" : "black")};
`;
