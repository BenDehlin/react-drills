import React, {Component} from 'react'
import Todo from './Todo'

export default class List extends Component{
  constructor(){
    super()
    this.state = {
      list: []
    }

    // this.deleteItem = this.deleteItem.bind(this)
  }

  // deleteItem(val){
  //   this.props.delete(val)
  //   console.log(arr)
  //   this.setState({list: arr})
  // }

  render(){
    let list = this.props.list.map((element, index) =>{
    return (
      // <div key={`${index}-div`}>
        <h1 key={`${index}-item`}><Todo item={element}/></h1>
      //   <button key ={`${index}-delete`}
      //   value={index}
      //   onClick={e => {
      //     this.deleteItem(e.target.value)
      //   }}>Delete</button>

      // </div>

        )
    })
    // this.setState({list: list})
    return(
      <div>
        <div>{list}</div>
      </div>
    )
  }
}