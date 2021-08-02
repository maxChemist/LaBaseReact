import React from "react";

import SampleRegistrationForm from "./components/SampleRegistrationForm/SampleRegistrationForm"
import SamplesList from "./components/SamplesList/SamplesList"
localStorage.setItem("myBase",[])

function Start() {

return (
    <div>
      <SampleRegistrationForm
      />

      <SamplesList         />
      
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