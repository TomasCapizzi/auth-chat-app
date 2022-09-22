import { app, db } from "../firebase";

import Chat from "../Components/Chat";
import React from "react";
import UserNAv from "../Components/UserNav";

export default function Home({user, name}){

    const logOut = ()=>{
        app.auth().signOut();
    }  

    return(
        <section className='home'>
            <UserNAv user={user} logOut={logOut}  name={name}/>
            <Chat user={user} db={db}/>
        </section>
    )
}
