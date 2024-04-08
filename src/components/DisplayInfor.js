import React from "react";


class DisplayInfor extends React.Component {
    render() {

        {/*  Dạng 3: Dùng destructuring js để thay thế props */ }
        const {age, name} = this.props;

        return (
            <div>
                <p>my name is {this.props.name}</p>
                <p>I'm {this.props.age} years old </p>

                {/*  Dạng 3: Dùng destructuring js để thay thế props */}
                <p>Dùng destructuring js, name: {name} - age: {age}</p>



            </div>
        );

    }

}

export default DisplayInfor