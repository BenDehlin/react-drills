import React, { useState } from "react"

const Login = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button
        onClick={() => {
          alert(`Username: ${username} Password: ${password}`)
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Login
