import React,{useState, useEffect} from "react";
import Message from "./Message";
import TextForm from "./TextForm";

export default function Chat({user = null,db = null}){
   
    const [messages, setMessages] = useState([]);


    const handleDelete = (id) => {
        db.collection('messages').doc(id).delete(); 
    }

    function showLastMsj(){
        const refSpan = document.getElementById('ref')
        refSpan.scrollIntoView()
    }

    useEffect(()=>{
        if(db){
            const msgList = db.collection('messages').orderBy('createdAt').limit(100).onSnapshot(
                querySnapshot => {
                    const data = querySnapshot.docs.map(
                        doc=> ({
                            ...doc.data(),
                            id: doc.id
                        })
                    )
                    setMessages(data)
                }
            )
            return msgList;
        }
        
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