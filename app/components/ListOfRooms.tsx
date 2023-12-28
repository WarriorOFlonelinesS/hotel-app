export const ListOfRooms = ({room}:{room:any}) =>{
    return (
        <tr className="table-tr table-tr_light">
            <td className="table__item">{room.number}</td>
            <td className="table__item">{room.type}</td>
            <td className="table__item">{room.occupancy}</td>
            <td className="table__item table__item_center">{room.price + '$'}</td>
            <td className="table__item table__item_right">{room.guest}</td>
            <td className="table__item table__item_right"><button className="btn btn_item">More information</button></td>
        </tr>
    )
}