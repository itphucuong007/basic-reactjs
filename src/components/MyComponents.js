import React  from "react";

class MyComponent extends React.Component {
    render() {
        // jsx
        return (
            <div>
                My first Component 
                {Math.random()}
            </div>
        );

    }
}

export default MyComponent