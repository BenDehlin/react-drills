import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      listOfStuff: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  render(){
    let htmlList = this.state.listOfStuff.map((element, index) => {
    return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        {htmlList}
      </div>
    );
  }
}

export default App;
