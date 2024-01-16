import Link from "next/link";
import { useRouter } from "next/navigation";
import ItemRoom from "./ItemRoom";

export const ListOfRooms = ({ rooms, roomId, freeRooms }) => {
  const router = useRouter()
  return (
    <>
      {
      rooms.length > 0 
      && 
     ((freeRooms) ?
          rooms.filter(freeRoom => freeRoom.guest === '').map((room: any, id: number) => (
          <ItemRoom room={room} roomId={roomId} id={id} />
        )) 
        : 
        rooms.map((room: any, id: number) => (
          <ItemRoom room={room} roomId={roomId} id={id} />
        )))
    }
    </>
  );
};
 