import { useMemo } from "react";

export default function useMakeRoomTitle(
  chatRoomMember: [string],
  userEmail: string
) {
  if (!chatRoomMember) return;

  const filteredRoomMember = chatRoomMember.filter((member) => {
    return member !== userEmail;
  });

  const chatRoomTitle = useMemo(() => {
    const isMultiMember = filteredRoomMember.length > 1;
    switch (isMultiMember) {
      case true:
        return filteredRoomMember.join(", ");
      case false:
        return filteredRoomMember[0];
    }
  }, [filteredRoomMember]);

  return chatRoomTitle;
}
