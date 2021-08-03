import React , {useState} from "react";
import Table from './components/Table'

import SampleRegistrationForm from "./components/SampleRegistrationForm/SampleRegistrationForm"
import SamplesList from "./components/SamplesList/SamplesList"
localStorage.setItem("myBase",[])

function Start() {
const [signalFlag,setSignalFlag]=useState(()=>{const d=new Date(); const t=d.getTime()+"";return (t)})
console.log("App", signalFlag)
return (
    <div>
      <SampleRegistrationForm
      signalFlag={signalFlag}
      setSignalFlag={setSignalFlag}
      />

      <SamplesList/>
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