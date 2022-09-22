import { app, fb } from "../firebase";

import {FaGoogle} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import React from 'react';

function OptionButtonsList({setOption}) {

  const handleOptions = (e)=>{
    console.log(e)
    setOption(e);
}
const googleLog = async (e)=>{
    setOption(e);
    try {
        await app.auth().signInWithPopup(new fb.auth.GoogleAuthProvider())
    } catch(error) {
        console.log(error)
    }

}
  return (
    <ul>
        <button id='mail-btn' value='mail'  onClick={()=> handleOptions('Mail')}><GrMail/></button>
        <button id='google-btn' value='google' onClick={()=> googleLog('Google')}><FaGoogle/></button>
    </ul>
  )
}

export default OptionButtonsList