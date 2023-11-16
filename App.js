import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('dark')
  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode = {toggleMode}/>
    <div class="container my-3"> 
   <TextForm heading="Enter the text to analyze" />
    {/*<About/>*/}
     </div>
  
    </>
  
  );
}

export default App;
