import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../../../../assets/Icons/search.svg";
import { auth, db } from "../../../../../firebaseconfig";

export default function NewChat() {
  const userEmail = auth?.currentUser?.email;
  const [email, setEmail] = useState<string>("");
  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const addChatRoom = async (email: string, userEmail: string) => {
    if (!userEmail || !email.length) return;

    try {
      await addDoc(collection(db, `chat`), {
        users: [email, userEmail],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
    }
  };

  return (
    <Layout>
      <NewChatButtonContainer
        onSubmit={(e) => {
          e.preventDefault();
          addChatRoom(email, userEmail);
        }}
      >
        <InputContainer>
          <NewChatInput
            type="email"
            placeholder="이메일로 대화상대를 추가해보세요."
            value={email}
            onChange={(e) => onChangeEmail(e.target.value)}
          />
        </InputContainer>
        <ImageContainer onClick={() => addChatRoom(email, userEmail)}>
          <AddNewChatIcon src={SearchIcon} width={22} height={22} />
        </ImageContainer>
      </NewChatButtonContainer>
    </Layout>
  );
}
const Layout = styled.div``;
const NewChatButtonContainer = styled.form`
  position: relative;
  margin: 10px 5px 10px 5px;
`;
const InputContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 270px;
  border: none;
  padding: 10px 10px;
  display: flex;
  align-items: center;
`;
const NewChatInput = styled.input`
  min-width: 250px;
  margin-left: 10px;
  border: none;
  outline: 0;
  background-color: transparent;
`;
const ImageContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 88%;
  cursor: pointer;
`;
const AddNewChatIcon = styled(Image)``;
