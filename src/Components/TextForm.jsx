import React, {useRef} from "react";

import {MdSend} from 'react-icons/md';
import usePostMessage from '../Hooks/usePostMessage'

export default function TextForm({user, showLastMsj}){

    const {uid} = user;
    const textRef = useRef();

    const {postMessage, setNewMsj} = usePostMessage({user, showLastMsj, textRef});

    function handleNew(e){
        setNewMsj(e.target.value)
    }


    return(
        <>
            {uid ? 
                <form className='form-container'>
                    <textarea  ref={textRef} cols="30" rows="3" onChange={handleNew} />
                    <button onClick={(e)=> postMessage(e)} className='btn-icon'><MdSend/></button>
                </form>
            :
            null
            }
        </>
    )
}