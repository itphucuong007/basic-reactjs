import React, { useState } from "react";

import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';


/*
class MyComponent extends React.Component {

    handleAddNewUser = (userObj) => {
        console.log("check data from submit: ", userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        });
    }

    state = {
        listUsers: [
            { id: 1, name: 'pc001', age: "12" },
            { id: 2, name: 'pc002', age: "22" },
            { id: 3, name: 'pc003', age: "32" },
            { id: 4, name: 'pc004', age: "42" },
        ]
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        });
    }

    render() {
        return (
            <>
                <div className="A">
                    <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="B"></div>
            </>
        );
    }
}

*/




const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: 'pc001', age: "12" },
            { id: 2, name: 'pc002', age: "22" },
            { id: 3, name: 'pc003', age: "32" },
            { id: 4, name: 'pc004', age: "42" },
        ]
    );

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }

    return (
        <>
            <div className="A">
                <AddUserInfor handleAddNewUser={handleAddNewUser} />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="B"></div>
        </>
    );



}






export default MyComponent