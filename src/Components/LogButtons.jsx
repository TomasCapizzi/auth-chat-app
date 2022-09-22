import React from 'react'

function LogButtons({setIsLog, setError, setUserTaken, isLog, changeAccountLog}) {
  return (
    <div>
        <button onClick={()=> {
            setIsLog(!isLog);
            setUserTaken(false);
            setError(false);
        }}>{!isLog ? 'Have an account? Log in': 'Don´t have account? Register'}</button>
        <button onClick={changeAccountLog}>Change Account LogIn</button>
    </div>
  )
}

export default LogButtons