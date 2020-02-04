import React, {useState} from 'react'
import './App.css'

const App = (props) => {
  const [state, setState] = useState({
    listOfThings: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
  })

  return (
    <div>
      {state.listOfThings.map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })}
    </div>
  )
}

export default App