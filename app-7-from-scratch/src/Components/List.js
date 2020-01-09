import React, {Component} from 'react'
import Todo from './Todo'

class List extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    let list = this.props.list.map((item, index) => {
      return <Todo key={index} todo={item}/>
    })
    return(
      <div>
        {list}
      </div>
    )
  }
}

export default List