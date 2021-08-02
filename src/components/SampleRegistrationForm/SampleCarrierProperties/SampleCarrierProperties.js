import React  from "react";

import SamplingPlace from "./SamplingPlace"
import SampleValue from "./SampleValue"
import SampleBring from "./SampleBring"
import SampleReciever from "./SampleReceiver"
import DeliveryDate from "./DeliveryDate"

const SampleCarrierProperties=({taraValue,samplingPlace,sampleDeliveryman,sampleReceiver,deliverySample,SetDeliverySample})=>{
  const changeHandler=(e,key)=>{SetDeliverySample({...deliverySample,[key]:e})
  }

  const  isEmpty=(obj)=> {
    //проверка объекта на "пустотность"
    for(var key in obj)
    {
        return false;
    }
    return true;
}
  
   if (isEmpty(deliverySample))
    {
      deliverySample["samplingPlace"]=samplingPlace[0];
      deliverySample["sampleValue"]=[{"taraValue":taraValue[0],"quantity":1}]
      deliverySample["sampleBring"]=""
      deliverySample["sampleRecieve"]=""
      deliverySample["deliveryDate"]=""
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
        SetDeliverySample={SetDeliverySample}
        deliverySample={deliverySample}
        
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
        <hr></hr>
      </div>

    )
    
    }
    export default SampleCarrierProperties;