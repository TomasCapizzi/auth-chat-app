import React from 'react'

function UserNavInfo({user, name}) {
  return (
    <div>
        <h3>You logged in succesfully{user.displayName ? `, ${user.displayName}` : name}</h3>
        { user.photoURL &&
            <img src={user.photoURL} alt=""/>
        }
    </div>
  )
}

export default UserNavInfo