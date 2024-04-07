import React from "react";

class UserInfor extends React.Component {
    state = {
        'name': 'pc007',
        'address': 'soviet Union',
        'age': 27,
    }

    handleClick(event) {
        // console.log('>> Click me');
        // console.log('event.target: ', event.target);
        // console.log('event: ', event);

        // 20.2 Vấn đề của this
        // console.log('age: ', this.state.age);

        // 20.3 Đổi các value của object state bằng cách dùng setState()
        this.setState({
            'name': 'Kiki',
            'age': Math.floor((Math.random() * 100) + 10)
        });

    }

    handleOnMoverOver(event) {
        // console.log('>> Click me');
        console.log('event: ', event.pageX);
    }

    handleOnChangeInput = (event) => {
        console.log(event.target.value);
        this.setState({
            'name': event.target.value,
        });
    }

    handleOnChangeAge = (event) => {
        console.log(event.target.value);
        this.setState({
            'age': event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        // jsx
        return (
            <div>
                My name is {this.state.name} and i'm {this.state.age} years old and
                live in {this.state.address}
                < br />
                <button onClick={(event) => { this.handleClick(event) }}>Click handleClick</button>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your name</label>
                    <input
                        type='text' 
                        onChange={(event) => { this.handleOnChangeInput(event) }}
                    />

                    <br/>

                    <label>Your age</label>
                    <input
                        type='text' value={this.state.age}
                        onChange={(event) => { this.handleOnChangeAge(event) }}
                    />

                    <button>Submit</button>
                </form>

            </div>

        );

    }







}

export default UserInfor