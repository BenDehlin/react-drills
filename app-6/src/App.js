import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      list: []
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }
  addItem(){
    this.setState({list: [...this.state.list, this.state.userInput]})
  }

  render(){
    let htmlList = this.state.list.map((element, index) => {
      return <Todo key={index} task={element}/>
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input placeholder="item"
        onChange={e => {
          this.handleChange(e.target.value)
        }}></input>
        <button
        onClick={() => {
          this.addItem()
        }}>Add</button>
        {htmlList}
        <Todo/>
      </div>
    );
  }
}

export default App;