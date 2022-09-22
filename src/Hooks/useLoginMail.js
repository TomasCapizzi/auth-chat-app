import { app } from "../firebase";
import { useState } from "react";

const useLoginMail = ({setUser, option, setOption, setName}) => {

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


    
  return {
    createUser,
    logIn,
    submitHandler,
    changeAccountLog,
    isLog,
    error,
    userTaken,
    setIsLog,
    setError,
    setUserTaken
  }
}

export default useLoginMail