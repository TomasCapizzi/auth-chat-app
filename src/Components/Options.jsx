import React from "react";
import { app, fb } from "../firebase";
import {FaGoogle} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';

export default function Options({setOption}){


    const handleOptions = (e)=>{
        console.log(e)
        setOption(e);
    }
    const googleLog = async (e)=>{
        console.log(e);
        setOption(e);
        try {
            await app.auth().signInWithPopup(new fb.auth.GoogleAuthProvider())
        } catch(error) {
            console.log(error)
        }

    }
    return(
        <section className='options'>
        <h3>Login to continue or register if you don´t have an account</h3>
        <ul>
            <button id='mail-btn' value='mail'  onClick={()=> handleOptions('Mail')}><GrMail/></button>
            <button id='google-btn' value='google' onClick={()=> googleLog('Google')}><FaGoogle/></button>
        </ul>
        </section>
    )
}