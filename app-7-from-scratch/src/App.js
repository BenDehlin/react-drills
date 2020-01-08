import React, {Component} from 'react'
import NewTask from './Components/NewTask'
import List from './Components/List'


class App extends Component{
  constructor(){
    super()
    this.state = {
      array:[]
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(todo){
    this.setState({array: [...this.state.array, todo]})
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