import React, {Component} from 'react'

import {Link} from "react-router-dom"
import router from "./router"

class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <div className="App">
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/details">Details</Link>
          </ul>
        </nav>
        {router}
      </div>
    )
  }
}

export default App