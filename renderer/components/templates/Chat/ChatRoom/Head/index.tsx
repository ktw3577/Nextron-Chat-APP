import Image from "next/image";
import styled from "styled-components";
import Temp from "../../../../../assets/Icons/user_avatar.svg";
import { auth } from "../../../../../firebaseconfig";
import useMakeRoomTitle from "../../../../../Utils/useMakeRoomTitle";
import GroupIcon from "../../../../../assets/Icons/group.svg";
import { Dispatch, SetStateAction } from "react";

type Props = {
  readonly roomMembers?: [string];
  readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Head({ roomMembers, setIsOpen }: Props) {
  const user = auth?.currentUser?.email;
  const roomTitle = useMakeRoomTitle(roomMembers, user);
  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <Layout>
      <RoomContainer>
        <RoomProfileContainer>
          <RoomProfile src={Temp} />
        </RoomProfileContainer>
        <RoomTitleContainer>
          <RoomTitle>{roomTitle}</RoomTitle>
        </RoomTitleContainer>
      </RoomContainer>
      <RoomOptionContainer>
        <ShowGroupButtonContainer>
          <ShowGroupButton
            src={GroupIcon}
            width={40}
            height={40}
            onClick={onClick}
          />
        </ShowGroupButtonContainer>
      </RoomOptionContainer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  width: calc(100% - 30px);
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray2};
`;
const RoomContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
`;
const RoomProfile = styled(Image)``;
const RoomProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RoomTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  max-width: 450px;
`;
const RoomTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const RoomOptionContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ShowGroupButtonContainer = styled.div`
  cursor: pointer;
  padding: 2.5px 5px;
  border-radius: 3px;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray2};
  }
`;
const ShowGroupButton = styled(Image)``;
