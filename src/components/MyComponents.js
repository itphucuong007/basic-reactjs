import React from "react";

import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';


class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: 'pc001', age: "12" },
            {id: 2, name: 'pc002', age: "22" },
            {id: 3, name: 'pc003', age: "32" },
            {id: 4, name: 'pc004', age: "42" },
        ]
    }

    render() {
        return (
            <div>
                <UserInfor />

                <DisplayInfor listUsers={this.state.listUsers} />
        
            </div>
        );

    }
}

export default MyComponent