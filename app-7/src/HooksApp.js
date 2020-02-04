import React, {useState} from 'react'
import './App.css'
import List from './Components/HooksList'
import NewTask from './Components/HooksNewTask'

const App = () => {
  const [list, setList] = useState([])
  const addItem = (task) => setList([task, ...list])

  return (
    <div>
      <h1>Todo List:</h1>
      <NewTask addItem={addItem} />
      <List tasks={list} />
    </div>
  )
}

export default App