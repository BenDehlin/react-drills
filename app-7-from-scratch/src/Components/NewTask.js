import React, {Component} from 'react'

class NewTask extends Component{
  constructor(){
    super()
    this.state ={
      userInput: ''
    }
  }

  handleChange=({name, value}) =>{this.setState({[name]: value})}
  addItem=()=>{
    this.props.add(this.state.userInput)
    this.setState({userInput: ''})
  }

  render(){
    return(
      <div>
        <input value={this.state.userInput}
        name="userInput"
        placeholder="new item"
        onChange={e=>{this.handleChange(e.target)}}></input>
        <button
        onClick={()=>{this.addItem()}}>Add Item</button>
      </div>
    )
  }
}

export default NewTask