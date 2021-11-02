import React, {useState} from "react";
import { db } from "../firebase";
import {MdSend} from 'react-icons/md';

export default function TextForm({user}){

    const [newMsj, setNewMsj] = useState('');
    const {uid, displayName, photoURL, email} = user;

    function handleNew(e){
        setNewMsj(e.target.value)
    }

    function postMessage(e){
        e.preventDefault();
        const textAreaValue = document.getElementById('newMessage');
        (db && newMsj !== '') && db.collection('messages').add({
            text: newMsj,
            createdAt: new Date(),
            uid,
            displayName: displayName? displayName : '',
            photoURL: photoURL? photoURL : '',
            email
        })

        setNewMsj('')
        textAreaValue.value = '';
    }

    return(
        <form className='form-container'>
            <textarea  id="newMessage" cols="30" rows="3" onChange={handleNew} />
            <button onClick={(e)=> postMessage(e)} className='btn-icon'><MdSend/></button>
        </form>
    )
}