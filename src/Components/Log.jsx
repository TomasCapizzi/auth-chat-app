import LogButtons from "./LogButtons";
import LogErrors from "./LogErrors";
import LogForm from "./LogForm";
import React from "react";
import useLoginMail from "../Hooks/useLoginMail";

export default function Log({setUser, option, setOption, setName}){

    const {submitHandler, changeAccountLog, isLog, error, userTaken, setIsLog, setError, setUserTaken} = useLoginMail({setUser, option, setOption, setName})
    

    return(
        <section className='log-screen'>
            <h1>Welcome!</h1>
            <LogErrors error={error} userTaken={userTaken}  />
            <h3>{isLog ? 'Log in' : 'Register'}</h3>
            <LogForm submitHandler={submitHandler} isLog={isLog} />
            <LogButtons setIsLog={setIsLog} setError={setError} setUserTaken={setUserTaken} isLog={isLog} changeAccountLog={changeAccountLog} />
        </section>
    )
} 
/*
    {
        !isLog && 
        <>
            <label htmlFor="">Name</label>
            <input type="text" id='name' />
        </>
    }
*/