import React from 'react'
import Todo from './HooksTodo'

const List = ({tasks}) => (
  <div>
    {tasks.map((element, index) => (
      <Todo key={index} task={element} />
    ))}
  </div>
)

export default List