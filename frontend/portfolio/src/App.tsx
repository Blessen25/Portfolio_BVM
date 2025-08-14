import React, { useState } from "react";
import "./App.css";
import Home from "./screens/home";
import Header from "./screens/header";

const App = () => {
  
  const [darkmode, setdarkmode] = useState(true);
  return (
    <>
      <Header />
    </>
  )
}

export default App;