import React from 'react'
import { useState } from 'react'
import './Login.css'

function Login() {
  const [input,setName]=useState({})

  function change(event){
    setName(event.target.value)
  }
 

  return (
    <div>
        <h1 className='Login-heading'>Login Form</h1>
        <form className='Login-Form'>
            <div className='Login-input'>
              <div>
                <label className='Login-Username-label'>Username:</label>
                <input onChange={(event)=>change(event)} className='Login-Username-Input' type={"email"} placeholder='Enter E-mail' required ></input>
              </div>
              <div>
                  <label className='Login-Password-Label'>Password:</label>
                  <input onChange={(event)=>change(event)} className='Login-Password-Input' type={"password"} placeholder='Enter Password' required minLength={8}></input>
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