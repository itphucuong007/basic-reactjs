import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log('0. call constructor');
        super(props);
        this.state = {
            isShowListUser: true
        };
    }



    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });

    };

    componentDidMount = () => {
        console.log('2. call componentDidMount: ');
        setTimeout(() => {
            document.title = "hello";
        }, 3000);
    }
    
    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log('3. call componentDidUpdate: ', this.props, prevProps);
    }


    render() {
        console.log('1. call render ');
        const { listUsers } = this.props;
        // console.log(listUsers);
        return (

            <div className="display-infor-container">
                {/* <img src={logo} /> */}
                <div>
                    <br />
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? 'Hide list user' : 'Show list user'}
                    </span>
                </div>


                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, key) => {
                            // console.log(">>> Check map user: ", user);
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'} >
                                    <div>
                                        <div>name: {user.name}</div>
                                        <div>age: {user.age}</div>
                                    </div>

                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)} > Delete </button>
                                        <hr />
                                    </div>

                                </div>


                            );
                        }
                        )
                        }
                    </>
                }
            </div>
        );
    }

}

export default DisplayInfor