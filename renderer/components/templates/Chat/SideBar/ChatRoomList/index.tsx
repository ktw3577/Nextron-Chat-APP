import styled from "styled-components";
import useChatRoomList from "../../../../../Utils/useChatRoomList";
import ChatRoom from "../../../../molecules/Chat/ChatRoom";

export default function ChatRoomList() {
  const chats = useChatRoomList();

  return (
    <Layout>
      {chats.length ? (
        chats.map((chat) => <ChatRoom key={Math.random()} chat={chat} />)
      ) : (
        <EmptyChatRoomList />
      )}
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const EmptyChatRoomList = () => {
  return (
    <EmptyLayout>
      <EmptyMessageArea>{EmptyMessage}</EmptyMessageArea>
    </EmptyLayout>
  );
};

const EmptyLayout = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;
const EmptyMessageArea = styled.p`
  text-align: center;
  font-size: 15px;
`;
const EmptyMessage = `현재 존재하는 채팅창이 없어요. \n 👆 이메일로 대화상대를 추가해주세요! 👆`;
