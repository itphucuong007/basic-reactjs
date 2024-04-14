import React from "react";
import './DisplayInfor.scss';


// class DisplayInfor extends React.Component {
//     render() {
//         console.log('1. call render ');
//         const { listUsers } = this.props;
//         // console.log(listUsers);
//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <>
//                         {listUsers.map((user, key) => {
//                             // console.log(">>> Check map user: ", user);
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? 'green' : 'red'} >
//                                     <div>
//                                         <div>name: {user.name}</div>
//                                         <div>age: {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)} > Delete </button>
//                                         <hr />
//                                     </div>
//                                 </div>
//                             );
//                         }
//                         )
//                         }
//                     </>
//                 }
//             </div>
//         );
//     }
// }



const DisplayInfor = (props) => {
    const { listUsers } = props;
    // console.log(listUsers);
    return (
        <div className="display-infor-container">
            {true &&
                <>
                    {listUsers.map((user, key) => {
                      
                        return (
                            <div key={user.id} className={+user.age > 18 ? 'green' : 'red'} >
                                <div>
                                    <div>name: {user.name}</div>
                                    <div>age: {user.age}</div>
                                </div>

                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)} > Delete </button>
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

export default DisplayInfor