import React, {Component} from 'react'

export default class Todo extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <div>{this.props.task}</div>
    )
  }
}