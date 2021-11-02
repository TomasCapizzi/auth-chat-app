import React from "react";
import {MdOutlineLogout} from 'react-icons/md';

export default function UserNAv({user, logOut, name}){

    return(
        <nav className='user-nav'>
            <div>
                <h3>You logged in succesfully{user.displayName ? `, ${user.displayName}` : name}</h3>
                { user.photoURL &&
                    <img src={user.photoURL} alt=""/>
                }
            </div>
            <button onClick={logOut} className='btn-icon' ><span>Log Out</span> <MdOutlineLogout/></button>
        </nav>
    )
}