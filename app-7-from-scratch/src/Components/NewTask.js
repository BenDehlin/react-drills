import React, {Component} from 'react'


class NewTask extends Component{
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
    this.addItem = this.addItem.bind(this)
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
        <input value={this.state.userInput}
        placeholder="new item"
        onChange={e => {
          this.handleChange(e.target.value)
        }}></input>
        <button 
        onClick={() => {
          this.addItem()
        }}>Add</button>
      </div>
    )
  }
}

export default NewTask