import React, {useState} from 'react'

const App = (props) => {
  const [input, setInput] = useState('')
  const [filtered, setFiltered] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'])
  const [unfiltered, setUnfiltered] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'])

  handleChange = ({name, value}) => {
    setInput({[name]: value})
    setFiltered(unfiltered.filter(element => {
      return element.includes(state.input)
    }))
  }

  return (
    <div>
      <input name='input' value={input} onChange={(e) => handleChange(e.target)} />
      {filtered.map((element, index) => <h2 key={index}>{element}</h2>)}
    </div>
  )
}

export default App