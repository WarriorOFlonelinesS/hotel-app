import { db } from "../../firebase";

export const getRoomsApi = async () => {
  const response = await new Promise((resolve, reject) => {
    const unsubscribe = db.collection("room").onSnapshot((snapshot) => {
      const rooms = snapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));
      unsubscribe(); // Отменяем подписку, так как больше не нужно получать обновления
      resolve(rooms);
    }, reject);
  });
  return response;
};
