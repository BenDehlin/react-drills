import React, {Component} from 'react'
import List from './Components/List'
import NewTask from './Components/NewTask'


class App extends Component{
  constructor(){
    super()
    this.state = {
      array: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(task){
    this.setState({array: [...this.state.array, task]})
  }

  render(){
    return(
      <div>
        <NewTask add={this.handleAdd}/>
        <List list={this.state.array}/>
      </div>
    )
  }
}

export default App