import React, { useState } from "react";
import "./App.css";
import Home from "./screens/home";
import Header from "./screens/header";
import About from "./screens/about";
import { Skills } from "./screens/skill";
import Project from "./screens/project";
import Experience from "./screens/experience";

const App = () => {
  
  const [darkmode, setdarkmode] = useState(true);
  return (
    <>
      <Header darkMode = {darkmode} setDarkMode={setdarkmode}/>
      <div className={`maincontainer ${darkmode ? 'darkmode' : 'lightmode'}`}>
      <div className={`childcontainer`}>
        <Home darkMode={darkmode} setDarkMode={setdarkmode}/>
        <About darkMode= {darkmode} setDarkMode={setdarkmode}/>
        <Skills darkMode={darkmode} setDarkMode={setdarkmode}/>
        <Experience darkMode={darkmode} setDarkMode={setdarkmode}/>
        <Project darkMode={darkmode} setDarkMode={setdarkmode}/>
      </div>
      </div>
    </>
  )
}

export default App;