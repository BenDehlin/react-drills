import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      userInput: '',
      unfilteredArray: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      filteredArray: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  handleChange(val){
    this.setState({userInput: val})
    let filtered = this.state.unfilteredArray.filter(element => {
      return element.includes(this.state.userInput)
    })
    
    this.setState({filteredArray: filtered})
  }

  render(){
    let htmlList = this.state.filteredArray.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input className="inputField" 
        onChange={e =>{
          this.handleChange(e.target.value)
        }}></input>
        {htmlList}
        
      </div>
    );
  }
}

export default App;
