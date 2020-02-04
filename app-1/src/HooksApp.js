import React, {useState} from 'react'
import './App.css'

const App = (props) => {
  const [input, setInput] = useState('')
  return (
    <div>
      <input name='input' value={input}
      onChange = {e => setInput(e.target.value)}/>
      <p>{state.input}</p>
    </div>
  )
}

export default App