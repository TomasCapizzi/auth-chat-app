import React from 'react';
import { TiUser } from 'react-icons/ti'

function MessageAvatar({message}) {
  return (
    
        message.photoURL ? 
            <img src={message.photoURL} alt="" />
        :
            <TiUser />
    
  )
}

export default MessageAvatar