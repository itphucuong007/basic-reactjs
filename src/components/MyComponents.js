import React  from "react";

import UserInfor from './UserInfor';



class MyComponent extends React.Component {
    render() {
        // jsx
        return (
            <div>
                My first Component 
                {Math.random()}
                <UserInfor/>
            </div>
        );

    }
}

export default MyComponent