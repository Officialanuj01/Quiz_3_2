import React from "react";
import './App.css'
import {Routes, Route } from "react-router-dom";
import Main from "./Component/Main";
import Start from "./Component/Start";

class Quiz extends React.Component {

  render() {

    return (
      <>
              <Routes>
                <Route path="/" element = {<Start/>}></Route>
                <Route path="/Main" element= {<Main/>}></Route>
              </Routes>
      </>
    )
  }
}

export default Quiz;