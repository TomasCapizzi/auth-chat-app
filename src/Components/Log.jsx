import React, {useState} from "react";
import { app } from "../firebase";


export default function Log({setUser, option, setOption, setName}){

    const [isLog, setIsLog] = useState(false);
    const [error, setError] = useState(false);
    const [userTaken, setUserTaken] = useState(false);
    

    const createUser = (mail, password)=>{

        app.auth().createUserWithEmailAndPassword(mail,password).then((user)=>{
            setUser(user)
        }).catch(()=>{
            setUserTaken(true)
        })
    }

    const logIn = (mail, password)=>{
        app.auth().signInWithEmailAndPassword(mail, password).then((user)=>{
            console.log('Log in with: ', user.user)
            //setUser(user)  Esto no va ya que el onAuthStateChanged lo capta solo 
        }).catch(()=>{
            setError(true)
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const mail = e.target.email.value;
        const password = e.target.password.value;
        setName(e.target.name.value)
        if(isLog === false){
            createUser(mail, password)
        } else{
            logIn(mail, password)
        }
    }

    const changeAccountLog = ()=>{
        setOption(null)
    }

    return(
        <section className='log-screen'>
            <h1>Welcome!</h1>
            {error && <p>Mail or password incorrect</p>}
            {userTaken && <p>Mail already taken / Password length must be 6 or more</p>}
            <h3>{isLog ? 'Log in' : 'Register'}</h3>
            <form action="" onSubmit={submitHandler}>

                <label htmlFor="">Mail</label>
                <input type="email" id='email'/>
                <label htmlFor="">Pass</label>
                <input type="password" id='password' />
                <button>{isLog ? 'Log in' : 'Register'}</button>
            </form>
            <div>
                <button onClick={()=> {
                    setIsLog(!isLog);
                    setUserTaken(false);
                    setError(false);
                }}>{!isLog ? 'Have an account? Log in': 'Don´t have account? Register'}</button>
                <button onClick={changeAccountLog}>Change Account LogIn</button>
            </div>
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