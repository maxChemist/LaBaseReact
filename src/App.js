import React, { useState } from "react";

import SampleRegistrationForm from "./components/SampleRegistrationForm/SampleRegistrationForm"





localStorage.setItem("myBase",[])

function Start() {


  return (
    <div>
      <SampleRegistrationForm

      />


    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Start />
    </div>
  );
}
export default App;