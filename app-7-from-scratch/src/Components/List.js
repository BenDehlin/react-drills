import React, {Component} from 'react'
import Todo from './Todo'


class List extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    let list = this.props.list.map((element, index) =>{
    return <Todo key={`${element}-${index}`} todo={element}/>
    })
    return(
      <div>{list}</div>
    )
  }
}

export default List