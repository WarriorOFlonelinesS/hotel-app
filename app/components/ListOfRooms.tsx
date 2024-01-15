import Link from "next/link";
import { useRouter } from "next/navigation";

export const ListOfRooms = ({ rooms, roomId }) => {
  const router = useRouter()
  return (
    <>
      {rooms.length > 0 &&
        rooms.map((room: any, id: number) => (
          <tr className="table-tr table-tr_light">
            <td className="table__item">{room.number}</td>
            <td className="table__item">{room.type}</td>
            <td className="table__item">{room.occupancy}</td>
            <td className="table__item table__item_center">{room.price + '$'}</td>
            <td className="table__item table__item_left">{room.guest}</td>
            <td className="table__item table__item_right">
              <Link className="item__link" href={`/components/rooms/${roomId[id]}`}>
                <button className="btn btn_item">
                  More information
                </button>
              </Link>
            </td>
          </tr>
        ))}
    </>
  );
};
