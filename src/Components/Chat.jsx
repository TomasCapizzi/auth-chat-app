import React,{useEffect, useState} from "react";

import Message from "./Message";
import TextForm from "./TextForm";
import useDeleteMsj from "../Hooks/useDeleteMsj";
import useshowMsjs from "../Hooks/useshowMsjs";

export default function Chat({user = null,db = null}){
   
    const [messages, setMessages] = useState([]);
    const {handleDelete} = useDeleteMsj({db})

    const {showMessages} = useshowMsjs({db, setMessages})

    function showLastMsj(){
        const refSpan = document.getElementById('ref')
        refSpan.scrollIntoView()
    }

    useEffect(()=>{
        showMessages();     
    },[db])

    return (
        <section className='chat'>
            <div className='msj-container'>
                {
                    messages.map(
                        message => <Message key={message.id} message={message} user={user} handleDelete={handleDelete}/>
                    )
                }
                <span id='ref'></span>
            </div>
            <TextForm user={user} showLastMsj={showLastMsj} />
        </section>
    );
}