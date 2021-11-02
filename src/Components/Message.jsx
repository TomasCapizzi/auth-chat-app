import React from "react";
import {TiDelete, TiUser} from 'react-icons/ti'

export default function Message({message, user, handleDelete}){


    return (
        <div className='message-container'>
            <div className={user.uid === message.uid ? 'message send' : 'message received'}>
                {
                    message.photoURL ? 
                        <img src={message.photoURL} alt="" />
                    :
                        <TiUser />
                } 
                <p>{message.text}</p>
                <p className='date'>{message.createdAt.toDate().toDateString()}</p>
                {  !message.photoURL && user.uid !== message.uid &&
                        <div className='user-none'>
                            <p>{message.email}</p>
                        </div>
                }
            </div>
            {
                user.uid === message.uid && <button onClick={()=> handleDelete(message.id)}><TiDelete/></button>
            }
        </div>
    )
}
