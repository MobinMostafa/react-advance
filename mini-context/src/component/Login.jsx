import { useState, useContext } from "react"
import UserContext from "../context/UserContext"

const Login = () => {
 const [userName, setUsername] = useState('')
 const [password, setPassword] = useState('') 

 const {setUser} = useContext(UserContext)

 const handleSubmit = (e) => {
     e.preventDefault()
     setUser({userName, password})
 }
  return (
    <>
        <h1>Login</h1>
        <input type="text"
               value={userName}
               onChange={(e) =>  setUsername(e.target.value)}
               placeholder='Enter your name' />
         <br />
        <input type="password" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder='Enter your password' />

        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login

// import React, {useState, useContext} from 'react'
// import UserContext from '../context/UserContext'

// function Login() {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const {setUser} = useContext(UserContext)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setUser({username, password})
//     }
//   return (
//     <div>
//         <h2>Login</h2>
//         <input type='text'
//         value={username}
//         onChange={(e) => setUsername(e.target.value) }
//         placeholder='username'  />
//         <br/>
//         <input type='password' 
//         value={password}
//         onChange={(e) => setPassword(e.target.value) }
//         placeholder='password'  />
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default Login