export const Pagination = ({ roomsPerPage, totalRooms, paginate }: any) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalRooms / roomsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
    
            <ul className="pagination-list">
                {
                    pageNumbers.map(number => {
                        return (
                            <li className="page-item" key={number}>
                                <button className="btn btn_pagination" onClick={() => paginate(number)}>
                                    {number}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
    )
}