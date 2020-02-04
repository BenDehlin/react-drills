import React, {useState} from 'react'

const NewTask = ({addItem}) => {
  const [input, setInput] = useState('')
  return (
    <div>
      <input placeholder='new item'
      value={input}
      onChange = {e => setInput(e.target.value)} />
      <button onClick={() => {
        addItem(input)
        setInput('')}}>Add</button>
    </div>
  )
}

export default NewTask