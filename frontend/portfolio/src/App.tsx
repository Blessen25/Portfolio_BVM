import React, { useState } from "react";
import "./App.css";
import Home from "./screens/home";
import Header from "./screens/header";
import About from "./screens/about";
import { Skills } from "./screens/skill";

const App = () => {
  
  const [darkmode, setdarkmode] = useState(true);
  return (
    <>
      <Header darkMode = {darkmode} setDarkMode={setdarkmode}/>
      <div className={`maincontainer ${darkmode ? 'darkmode' : 'lightmode'}`}>
      <div className={`childcontainer`}>
        <Home darkMode={darkmode} setDarkMode={setdarkmode}/>
        <About darkMode= {darkmode} setDarkMode={setdarkmode}/>
        <Skills />
      </div>
      </div>
    </>
  )
}

export default App;