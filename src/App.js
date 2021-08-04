import React , {useState} from "react";

import SampleRegistrationForm from "./components/SampleRegistrationForm/SampleRegistrationForm"
import SamplesList from "./components/SamplesList/SamplesList"
localStorage.setItem("myBase",[])

function Start() {
const [signalFlag,setSignalFlag]=useState(0)

return (
    <div>
      <SampleRegistrationForm
          signalFlag={signalFlag}
          setSignalFlag={setSignalFlag}
      />

      <SamplesList
            signalFlag={signalFlag}
            setSignalFlag={setSignalFlag}
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