import styled from "styled-components";
import ChatInputForm from "../../../../molecules/Chat/ChatInputForm";
import ChatItem from "./ChatItem";

export default function RoomContent(messages) {
  return (
    <Layout>
      <ChatContainer>
        {messages?.messages?.map((message) => (
          <ChatItem
            key={Math.random()}
            sender={message.sender}
            text={message.text}
            timestamp={message.timestamp}
          />
        ))}
      </ChatContainer>
      <ChatInputForm />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  height: calc(100% - 70px);
  flex-direction: column;
  justify-content: space-between;
`;
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 0 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray2};
  height: 100%;
`;
