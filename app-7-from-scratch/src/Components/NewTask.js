import React, {Component} from 'react'


class NewTask extends Component{
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
    // this.addItem = this.addItem.bind(this)
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  addItem(){
    this.props.add(this.state.userInput)
    this.setState({userInput: ''})
  }

  render(){
    return(
      <div>
        <input value={this.state.userInput}
        name='userInput'
        placeholder='add todo'
        onChange = {e => {
          this.handleChange(e)
        }}/>
        <button
        onClick = {() => {
          this.addItem()
        }}>Add Todo</button>
      </div>
    )
  }
}

export default NewTask