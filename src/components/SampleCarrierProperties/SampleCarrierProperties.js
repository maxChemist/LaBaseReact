import React  from "react";

import {isEmpty} from "../Libraries"
import SamplingPlace from "./SamplingPlace"
import SampleValue from "./SampleValue"
import SampleBring from "./SampleBring"
import SampleReciever from "./SampleReceiver"
import DeliveryDate from "./DeliveryDate"

const SampleCarrierProperties=({taraValue,samplingPlace,sampleDeliveryman,sampleReceiver,deliverySample,SetDeliverySample})=>{
  const changeHandler=(e,key)=>{
    const obj={...deliverySample}
    obj[key]=e
    SetDeliverySample(obj)

  }
   if (isEmpty(deliverySample))
    {
      deliverySample["samplingPlace"]=samplingPlace[0];
      deliverySample["sampleValue"]=[{"taraValue":taraValue[0],"quantity":1}]
      deliverySample["sampleBring"]=null
      deliverySample["sampleRecieve"]=null
      deliverySample["deliveryDate"]=null
       
    }
  return (
      <div>
        <hr></hr>
        <SamplingPlace
        changeHandler={changeHandler}
        samplingPlace={samplingPlace}
        />
        <SampleValue
        taraValue={taraValue}
        
        />
        <SampleBring
        sampleDeliveryman={sampleDeliveryman}
        changeHandler={changeHandler}
        />

        <SampleReciever
        sampleReceiver={sampleReceiver}
        changeHandler={changeHandler}
        />

        <DeliveryDate
          changeHandler={changeHandler}
        />


        {JSON.stringify(deliverySample,null,3)}      
        <hr></hr>
      </div>

    )
    
    }
    export default SampleCarrierProperties;