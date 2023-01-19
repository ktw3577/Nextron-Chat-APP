import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../../../firebaseconfig";
import Head from "./Head";
import RoomContent from "./RoomContent";
import RoomMemberSideBar from "./RoomMemberSideBar";

export default function ChatRoom() {
  const [messages, setMessages] = useState<any>();
  const [roomMember, setRoomMember] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getMessage() {
      onSnapshot(
        query(collection(db, `chat/${id}/messages`), orderBy("timestamp")),
        (snapshot) => {
          const result = [];
          snapshot.docs.forEach((messageSnap) => {
            result.push(messageSnap.data());
          });
          setMessages(result);
        }
      );
    }
    getMessage();
  }, [id]);

  useEffect(() => {
    async function getChatMember() {
      const ref = doc(db, `chat/${id}`);
      onSnapshot(ref, (snapshot) => {
        setRoomMember(snapshot.data());
      });
    }
    getChatMember();
  }, [id]);

  return (
    <Layout>
      <Content>
        <Head roomMembers={roomMember?.users} setIsOpen={setIsOpen} />
        <RoomContent messages={messages} />
      </Content>
      {isOpen ? (
        <RoomMemberSideBar
          roomMembers={roomMember?.users}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Content = styled.div`
  height: 100%;
`;
