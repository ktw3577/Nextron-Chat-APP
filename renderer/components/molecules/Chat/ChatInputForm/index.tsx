import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import sendIcon from "../../../../assets/Icons/send_icon.svg";
import { auth, db } from "../../../../firebaseconfig";

export default function ChatInputForm() {
  const [text, setText] = useState<string>("");
  const userEmail = auth?.currentUser?.email;
  const router = useRouter();
  const { id } = router.query;
  const onChangeChat = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  const sendMessage = async () => {
    if (!text.length) return;
    try {
      await addDoc(collection(db, `chat/${id}/messages`), {
        sender: userEmail,
        text,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setText("");
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Layout
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}
    >
      <TextContainer>
        <TextArea
          placeholder="메세지를 입력해주세요."
          maxLength={1000}
          onChange={onChangeChat}
          value={text}
          onKeyDown={onEnterPress}
        />
      </TextContainer>
      <ChatOption onClick={() => sendMessage()}>
        <ChatButton src={sendIcon} width={30} height={30} />
      </ChatOption>
    </Layout>
  );
}

const Layout = styled.form`
  width: calc(100%-300px);
  padding: 10px;
  display: flex;
  align-items: center;
`;
const TextContainer = styled.div`
  width: calc(100% - 45px);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.gray1};
  padding: 10px;
  display: flex;
`;
const TextArea = styled.textarea`
  background-color: transparent;
  min-width: 500px;
  border: none;
  outline: 0;
  resize: none;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ChatOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.color.primaryLight};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
const ChatButton = styled(Image)``;
