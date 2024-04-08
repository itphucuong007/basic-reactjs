import React from "react";

import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';


class MyComponent extends React.Component {
    render() {

        // Tạo ra variable
        let myAge = 50;
        return (
            <div>
                My first Component
                {Math.random()}
                <UserInfor />

                {/* Dạng 1: Kiểu 1 và 2 */}
                <DisplayInfor name="PC007" age={12} />

                {/*  Dạng 2: Truyền gián tiếp */}
                <DisplayInfor name="PC007" age={myAge} />

               


            </div>
        );

    }
}

export default MyComponent