import React, {Component} from 'react'


export default class Todo extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  deleteItem(){

  }

  render(){
    return(
        <p>{this.props.item}</p>
    )
  }
}