import React, {Component} from 'react'

export default class NewTask extends Component{
  constructor(){
    super()
    this.state = {
      userInput: '',
      list: []
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  addItem(){
    this.props.add(this.state.userInput)
    this.setState({userInput: ''})
  }

  render(){
    return(
      <div>
        <input placeholder="new item"
        value={this.state.userInput}
        onChange={e => {
          this.handleChange(e.target.value)
        }}></input>
        <button
        onClick={() => {
          this.addItem()
        }}>Add Item</button>
      </div>
    )
  }
}