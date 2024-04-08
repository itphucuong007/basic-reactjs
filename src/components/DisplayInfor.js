import React from "react";


class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props;
        return (
            <div>
                {listUsers.map((user, key) => {
                    return (
                        <div key={user.id}>
                            <div>name: {user.name}</div>
                            <div>age: {user.age}</div>
                            <hr/>
                        </div>

                    );
                }
                )
                }
                
            </div>
        );
    }

}

export default DisplayInfor