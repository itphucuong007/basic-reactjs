import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';

import MyComponent from './components/MyComponents';

import React from 'react';

class App extends React.Component {

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
      'age': Math.floor((Math.random() * 100) + 10)
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
        <br />
        <button onClick={(event) => { this.handleClick(event) }}>Click handleClick</button>
       
        <form onSubmit={(event) => {this.handleOnSubmit(event)}}>

          <input
            type='text'
            onChange={(event) => { this.handleOnChangeInput(event) }}
          />

          <button>Submit</button>


        </form>



        <MyComponent></MyComponent>
      </div>
    );


  }

}



// const App = () => {
//   return (
//     <div>
//       <p>
//         hello world!!
//         <MyComponent></MyComponent>
//       </p>
//     </div>
//   );
// }


// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }



export default App;
