import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  handleChange(val){}
  addItem(){}

  render(){
    return (
      <div className="App">
        <input placeholder="item"></input>
        <button>Add</button>
        <Todo/>
      </div>
    );
  }
}

export default App;