import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';

const ManageUser = (props) => {
    return (
        <div className="manager-user-container">

            <div className="title">
                Manage User
            </div>

            <div className="user-container">
                <div><button>Add new users</button></div>
                <div>table users</div>

                <ModalCreateUser />

            </div>
        </div>
    );
}

export default ManageUser;