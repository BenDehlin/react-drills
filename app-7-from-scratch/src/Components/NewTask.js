import React, {Component} from 'react'

export default class NewTask extends Component{
  constructor(){
    super()
    this.state ={
      userInput: ''
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  addTask(){
    this.props.add(this.state.userInput)
    this.setState({userInput: ''})
  }

  render(){
    return(
      <div>
        <input placeholder="new task"
        value={this.state.userInput}
        onChange={e => {
          this.handleChange(e.target.value)
        }}></input>
        <button
        onClick={() => {
          this.addTask()
        }}>Add Item</button>
      </div>
    )
  }
}