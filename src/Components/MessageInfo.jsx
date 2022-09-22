import React from 'react'

function MessageInfo({message, user}) {
  return (
    <>
        <p>{message.text}</p>
        <p className='date'>{message.createdAt.toDate().toDateString()}</p>
        {  !message.photoURL && user.uid !== message.uid &&
                <div className='user-none'>
                    <p>{message.email}</p>
                </div>
        }
    </>
  )
}

export default MessageInfo