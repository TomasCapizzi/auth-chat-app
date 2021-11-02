import React, {useEffect, useState} from "react";
import './Styles/main.scss';
import Log from "./Components/Log";
import Home from "./Components/Home";
import {app} from './firebase';
import Options from "./Components/Options";
import Footer from "./Components/Footer";


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
