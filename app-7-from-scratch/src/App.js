import React, {Component} from 'react'
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component{
  constructor(){
    super()
    this.state = {
      list: []
    }
  }

  handleAdd=(val)=>{
    this.setState({list: [...this.state.list, val]})
  }

  render(){
    return(
      <div>
        <NewTask add={this.handleAdd}/>
        <List list={this.state.list}/>
      </div>
    )
  }
}

export default App