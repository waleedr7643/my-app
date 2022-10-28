import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light'); //weather darkmode is enable or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e346d';
      showAlert("dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success")
    }
  }

  const[alert,setAlert] = useState(null);


  const showAlert = (message,type) =>{
         setAlert({
          msg : message,
          type : type
         })

         setTimeout(() =>{
          setAlert(null);
         },3000);
  }

  return (    
    <>
    <Router>
    {/* <Navbar title="new text utils" aboutText="About TextUtils"/> */}
      <Navbar title="new text utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* //component 1 /about

      // exact component 2 /about/blog */}
      <Switch >
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route exact path="/"> */}
            <TextForm showAlert ={showAlert} heading="enter the text to analyze below" mode={mode}/>  
          {/* </Route> */}
      </Switch>
      </div>
     </Router>
    </>
    
  );
}

export default App;
