import { useRouter } from "next/router";
import styled from "styled-components";
import ChatRoom from "../../components/templates/Chat/ChatRoom";
import SideBar from "../../components/templates/Chat/SideBar";

export default function Chat() {
  const router = useRouter();
  const { id } = router.query;
  const isDefault = id === "default";

  return (
    <Layout>
      <SideBar />
      {isDefault ? <EmptyChatRoom /> : <ChatRoom />}
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  height: 98vh;
`;

const EmptyChatRoom = () => {
  return (
    <EmptyLayout>
      <Text>{EmptyMessage}</Text>
    </EmptyLayout>
  );
};

const EmptyMessage = `π­ νμ¬ μ νλ μ±νμ°½μ΄ μμ΄μ π­\n\n π μ±νμ°½μ μ νν΄μ£ΌμΈμ!`;

const EmptyLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;
const Text = styled.p`
  text-align: center;
  font-size: 16px;
`;
