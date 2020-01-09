import React from 'react'
import Todo from './Todo'
export default function List(props){
  let list = props.list.map((element, index) =>{
    return <Todo key={index} item={element}/>
  })

  return <div>{list}</div>
}