import { useState } from 'react'
import style from './login.module.css'

function Login() {

    const [inputs, setInputs] = useState({
        username : "",
        password : ""
      })
    
      const handleChange = e =>{
        setInputs(prev=> ({...prev, [e.target.name] : e.target.value}))
      }
    
      const handleClick = e =>{
        e.preventDefault()
        console.log(inputs)
      }
    
  return (
    <div className={style.container}>
        <h1>Login</h1>
      <form>
        <label>User Name</label>
        <input type="text" name='username' value={inputs.username} onChange={handleChange} />
        <br />
        <label >Password</label>
        <input type="password" name='password' value={inputs.password} onChange={handleChange}  />
        <br />
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  )
}

export default Login
