import React, {Component} from 'react'

class Login extends Component{
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername(val){
    this.setState({username: val})
  }
  handlePassword(val){
    this.setState({password: val})
  }
  login(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render(){
    return(
      <div>
        <input placeholder="username"
        onChange={e => {
          this.handleUsername(e.target.value)
        }}></input>
        <input placeholder="password"
        onChange={e => {
          this.handlePassword(e.target.value)
        }}></input>
        <button
        onClick={() => {
          this.login()
        }}>Login</button>
      </div>
    )
  }
}
export default Login