import React, {Component} from 'react';
import './App.css';
import List from './Components/List'
import NewTask from './Components/NewTask'

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(task){
    this.setState({list: [...this.state.list, task]})
  }

  render(){
    return (
      <div className="App">
        <h1>ToDo List:</h1>
        <NewTask add={this.handleAdd}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
