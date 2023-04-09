import { collection, DocumentData, onSnapshot, QueryDocumentSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebaseconfig";

export type ChatType = {
  readonly id: string;
  readonly chatRoomMember: [string];
};

export default function useChatRoomList() {
  const userEmail = auth?.currentUser?.email;
  const [curChats, setCurChats] = useState<ChatType[]>([]);

  useEffect(() => {
    onSnapshot(collection(db, "chat"), (snapshot) => {
      const chatRoomSnapshots: Array<QueryDocumentSnapshot<DocumentData>> = [];

      snapshot.forEach((chatRoomSnapshot) => {
        const chatMemebers = chatRoomSnapshot.data().users;
        if (chatMemebers.includes(userEmail)) {
          chatRoomSnapshots.push(chatRoomSnapshot);
        }
      });

      const chats = chatRoomSnapshots.map((snapshot) => {
        return {
          id: snapshot.id,
          chatRoomMember: snapshot.data().users as [string],
        };
      });
      setCurChats(chats);
    });
  }, []);

  return curChats;
}
