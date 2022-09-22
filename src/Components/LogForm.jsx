import React from 'react'

function LogForm({submitHandler, isLog}) {
  return (
    <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Mail</label>
        <input type="email" id='email'/>
        <label htmlFor="">Pass</label>
        <input type="password" id='password' />
        <button>{isLog ? 'Log in' : 'Register'}</button>
    </form>
  )
}

export default LogForm