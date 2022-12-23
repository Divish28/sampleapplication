import React from 'react'
import { useState } from 'react'
import './Login.css'

function Login() {
  const [input,setInput]=useState({})

  const change=(event)=>{
    const name = event.target.name
    const value= event.target.value
    setInput(values=>({...values,[name]:value}))
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log(input);

  }
  
 

  return (
    <div>
        <h1 className='Login-heading'>Login Form</h1>
        <form className='Login-Form'onSubmit={handleSubmit}>
            <div className='Login-input'>
              <div>
                <label className='Login-Username-label'>Username:</label>
                <input onChange={change} name="username" value={input.username} className='Login-Username-Input' type={"email"} placeholder='Enter E-mail' required ></input>
              </div>
              <div>
                  <label className='Login-Password-Label'>Password:</label>
                  <input onChange={change} name="password" value={input.password} className='Login-Password-Input' type={"password"} placeholder='Enter Password' required minLength={8}></input>
              </div>
              <div>
                  <a id='Forgot-Password' href=''></a>
              </div>
            </div>
            <div className='Login-Button'>
                <button>Login</button>
            </div>
        </form>
        <div className='New-user'>
          <a  href=''>New User</a>
        </div>
    </div>
  )
}

export default Login