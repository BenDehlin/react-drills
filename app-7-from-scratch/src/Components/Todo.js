import React, {Component} from 'react'


class Todo extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <h1>{this.props.todo}</h1>
    )
  }
}

export default Todo