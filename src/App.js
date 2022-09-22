import './Styles/main.scss';

import React, {useEffect, useState} from "react";

import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Log from "./Components/Log";
import Options from "./Components/Options";
import {app} from './firebase';

function App() {
  
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  
  const [option, setOption] = useState(null)

  useEffect(()=>{    
    app.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  },[])

  // 

  return (
    <div className="App">
      <div className='container'>
        { 
          user ? 
            <Home user={user}  option={option} name={name} />
            :  
            option ==='Mail' ? <Log setUser={setUser}  option={option} setOption={setOption} setName={setName} />  : <Options setOption={setOption}/>
        } 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
