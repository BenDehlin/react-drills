import React, { useState } from "react"
import "./App.css"
import Todo from "./Components/HooksTodo"

const App = props => {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  return (
    <div>
      <h1>My Todos:</h1>
      <input
        placeholder="item"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={() => setList([input, ...list])}>Add</button>
      {list.map((element, index) => (
        <Todo key={index} task={element} />
      ))}
    </div>
  )
}

export default App