import MessageAvatar from "./MessageAvatar";
import MessageInfo from './MessageInfo';
import React from "react";
import {TiDelete} from 'react-icons/ti'

export default function Message({message, user, handleDelete}){

    return (
        <div className='message-container'>
            <div className={user.uid === message.uid ? 'message send' : 'message received'}>
                <MessageAvatar message={message} />
                <MessageInfo message={message} user={user} />
            </div>
            {
                user.uid === message.uid && <button onClick={()=> handleDelete(message.id)}><TiDelete/></button>
            }
        </div>
    )
}
