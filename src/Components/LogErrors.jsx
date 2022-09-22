import React from 'react'

function LogErrors({error, userTaken}) {
  return (
    <>
        {error && <p>Mail or password incorrect</p>}
        {userTaken && <p>Mail already taken / Password length must be 6 or more</p>}
    </>

  )
}

export default LogErrors