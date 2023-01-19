import styled from "styled-components";
import ChatRoomList from "./ChatRoomList";
import NewChat from "./NewChat";
import UserBox from "./UserBox";

export default function SideBar() {
  return (
    <Layout>
      <UserBox />
      <NewChat />
      <ChatRoomList />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray0};
`;
