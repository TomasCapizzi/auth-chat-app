import { db } from "../firebase";
import { useState } from "react";

const usePostMessage = ({user, showLastMsj, textRef}) => {

    const {uid, displayName, photoURL, email} = user;
    const [newMsj, setNewMsj] = useState('');

    function postMessage(e){
        //console.log(email, uid, displayName)
        e.preventDefault();
        (db && newMsj !== '') && db.collection('messages').add({
            text: newMsj,
            createdAt: new Date(),
            uid: uid,
            displayName: displayName? displayName : '',
            photoURL: photoURL? photoURL : '',
            email
        })
        setNewMsj('');
        textRef.current.value = '';
        showLastMsj();
    }
  return {
    postMessage,
    setNewMsj
  }
}

export default usePostMessage