import ModalCreateUser from "./ModalCreateUser";


const ManageUser = (props) => {
    return (
        <div className="manager-user-container">

            <div className="title">
                Manage User
            </div>

            <div className="user-container">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table users
                    <ModalCreateUser />
                </div>
            </div>


        </div>
    );
}

export default ManageUser;