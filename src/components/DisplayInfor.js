import React from "react";


class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    };

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });

    };


    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        return (

            <div>
                <div>
                    <br />
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? 'Hide list user' : 'Show list user'}
                    </span>
                </div>


                { this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, key) => {
                            // console.log(">>> Check map user: ", user);
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'} >
                                    <div>name: {user.name}</div>
                                    <div>age: {user.age}</div>
                                    <hr />
                                </div>

                            );
                        }
                        )
                        }
                    </div>
                }
            </div>
        );
    }

}

export default DisplayInfor