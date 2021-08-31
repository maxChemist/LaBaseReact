import React, { useState } from "react";

import RequestLine from "./RequestLine"
import DisplaySampleProperties from "./DisplaySampleProperties"
import SampleCarrierProperties from "./SampleCarrierProperties/SampleCarrierProperties"
import {samplingPlace, taraValue, sampleReceiver, sampleDeliveryman, mainArray } from "../../initialDate"

const SampleRegistrationForm=({signalFlag,setSignalFlag})=>{

    const [SamplePropertiesArr, SetSamplePropertiesArr] = useState([]);
    const [baseRecords, SetBaseRec] = useState({});
    const [reEnter,SetReEnter]=useState(0)
    const [deliverySample,SetDeliverySample]=useState({})

return(
<div>
    <div>
        <DisplaySampleProperties 
        SamplePropertiesArr={SamplePropertiesArr} 
        mainArray={mainArray}
        SetReEnter={SetReEnter}
        
        />
    
      </div>


         <div>
        <RequestLine
          SetSamplePropertiesArr={SetSamplePropertiesArr}
          SamplePropertiesArr={SamplePropertiesArr}
          baseRecords={baseRecords}
          mainArray={mainArray}
          reEnter={reEnter}
          SetReEnter={SetReEnter}
          SetBaseRec={SetBaseRec}
          deliverySample={deliverySample}
          signalFlag={signalFlag}
          setSignalFlag={setSignalFlag}
        />
         </div>

         <div>
         {/* <SampleCarrierProperties
         baseRecords={baseRecords}
         taraValue={taraValue}
         samplingPlace={samplingPlace}
         sampleDeliveryman={sampleDeliveryman}
         sampleReceiver={sampleReceiver}
         deliverySample={deliverySample}
         SetDeliverySample={SetDeliverySample}
         /> */}
         </div>


 </div>
)
}

export default SampleRegistrationForm;