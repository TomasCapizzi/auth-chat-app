import {MdOutlineLogout} from 'react-icons/md';
import React from "react";
import UserNavInfo from "./UserNavInfo";

export default function UserNAv({user, logOut, name}){

    return(
        <nav className='user-nav'>
            <UserNavInfo user={user} name={name} />
            <button onClick={logOut} className='btn-icon' ><span>Log Out</span> <MdOutlineLogout/></button>
        </nav>
    )
}