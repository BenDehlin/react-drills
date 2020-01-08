import React, {Component} from 'react';
import './App.css';
import NewTask from './Components/NewTask'
import List from './Components/List'

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

  // handleDelete(index){
  //   let arr = this.state.list.splice()
  //   arr.splice(index, 1)
  //   this.setState({list: arr})
  // }

  render(){
    return (
      <div className="App">
        <NewTask add={this.handleAdd}/>
        <List list={this.state.list}/> {/* delete={this.handleDelete}/> */}
      </div>
    );
  }
}

export default App;
