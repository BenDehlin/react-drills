import React, {Component} from 'react'

export default class Todo extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <p>{this.props.task}</p>
    )
  }
}