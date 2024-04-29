
const TableUser = (props) => {
    
    // cách 1 lấy props của component cha
    const { listUsers } = props

    // cách 2 lấy props của component cha
    // const listUsers = props.listUsers
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0
                        && listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user${index}`}>
                                    <td scope="row">{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button className="btn btn-warning mx-3">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={4}>Not found data</td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )

}

export default TableUser