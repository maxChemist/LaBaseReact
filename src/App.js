import React from "react";
import Table from './components/Table'

import SampleRegistrationForm from "./components/SampleRegistrationForm/SampleRegistrationForm"
import SamplesList from "./components/SamplesList/SamplesList"
localStorage.setItem("myBase",[])

function Start() {

return (
    <div>
      <SampleRegistrationForm
      />

      <SamplesList         />
      <Table/>
      
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