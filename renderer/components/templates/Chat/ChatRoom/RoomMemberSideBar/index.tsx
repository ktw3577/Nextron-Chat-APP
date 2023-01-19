import Image from "next/image";
import styled, { keyframes } from "styled-components";
import MemberItem from "./MemberItem";
import ArrowRight from "../../../../../assets/Icons/arrow_right.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../firebaseconfig";
import SearchIcon from "../../../../../assets/Icons/search.svg";
import { useRouter } from "next/router";

type Props = {
  readonly roomMembers?: [string];
  readonly isOpen: boolean;
  readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function RoomMemberSideBar({
  roomMembers,
  isOpen,
  setIsOpen,
}: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [email, setEmail] = useState<string>("");

  const onClose = () => {
    setIsOpen(false);
  };
  const onChange = (email: string) => {
    setEmail(email);
  };

  const addMemberToChatRoom = async (roomMembers: [string], email: string) => {
    if (!email.length) return;

    try {
      await setDoc(doc(db, `chat/${id}`), {
        users: [email, ...roomMembers],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setEmail("");
    }
  };

  return (
    <Layout isOpen={isOpen}>
      <Content>
        <Text>대화상대</Text>
        <AddUserContainer
          onSubmit={(e) => {
            e.preventDefault();
            addMemberToChatRoom(roomMembers, email);
          }}
        >
          <AddUserInput
            type="email"
            placeholder="추가할 유저 이메일을 입력해주세요."
            value={email}
            onChange={(e) => onChange(e.target.value)}
          />
          <ImageContainer
            onClick={() => addMemberToChatRoom(roomMembers, email)}
          >
            <AddNewChatIcon src={SearchIcon} width={22} height={22} />
          </ImageContainer>
        </AddUserContainer>
        <MemberList>
          {roomMembers.map((member) => (
            <MemberItem key={Math.random()} member={member} />
          ))}
        </MemberList>
      </Content>
      <CloseIconContainer onClick={onClose}>
        <CloseIcon src={ArrowRight} width={45} height={45} />
      </CloseIconContainer>
    </Layout>
  );
}

const slideInAnimation = keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
`;
const Layout = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 55%;
  z-index: 9999;
  width: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  padding: 15px;
  height: 95%;
  background-color: ${({ theme }) => theme.color.gray1};
  animation: ${slideInAnimation} 0.3s;
`;
const Content = styled.div``;
const Text = styled.span``;
const AddUserContainer = styled.form`
  margin-top: 10px;
  background-color: white;
  border-radius: 5px;
  width: 240px;
  border: none;
  padding: 10px 10px;
  display: flex;
  align-items: center;
`;
const AddUserInput = styled.input`
  width: 100%;
  margin-left: 10px;
  border: none;
  outline: 0;
  background-color: transparent;
`;
const ImageContainer = styled.div`
  position: absolute;
  top: 55px;
  left: 75%;
  cursor: pointer;
`;
const AddNewChatIcon = styled(Image)``;

const MemberList = styled.div`
  margin-top: 10px;
`;
const CloseIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const CloseIcon = styled(Image)``;
