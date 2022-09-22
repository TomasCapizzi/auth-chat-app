import OptionButtonsList from "./OptionButtonsList";
import React from "react";

export default function Options({setOption}){

    return(
        <section className='options'>
            <h3>Login to continue or register if you don't have an account</h3>
            <OptionButtonsList setOption={setOption} />
        </section>
    )
}