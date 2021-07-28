import React  from "react";

import {isEmpty} from "./Libraries"

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
      <div>
        {"Откуда поступила проба:  "}
        <select  onChange={e=>changeHandler(e.target.value,"samplingPlace")}     >
            {samplingPlace.map((v)=>(<option key={v}>{v}</option>))}
        </select>
      </div>
        <div>
        {"Объём пробы:  "}
          <select>
           {taraValue.map((v)=>(<option key={v}>{v}</option>))}
          </select>
        {"  x  "}
        <select>
          <option key={"1"}>{"1"}</option>
          <option key={"2"}>{"2"}</option>
          <option key={"3"}>{"3"}</option>
          <option key={"4"}>{"4"}</option>
          <option key={"5"}>{"5"}</option>
          </select>
        </div>
      <div>
        {"Пробу доставил:  "}
        <select onChange={e=>changeHandler(e.target.value,"sampleBring")}>
          <option key={"Пробу доставил"}>{""}</option>
          {sampleDeliveryman.map((v)=>(<option key={v}>{v}</option>))}
        </select>
      </div>
     
      <div>
        {"Пробу принял:  "}
        <select onChange={e=>changeHandler(e.target.value,"sampleRecieve")}>
          <option key={"Пробу принял"}>{""}</option>
          {sampleReceiver.map((v)=>(<option key={v}>{v}</option>))}
        </select>
      </div>
    
      <div>
        {"Дата поступления:  "}
        <input type="date" onChange={e=>changeHandler(e.target.value,"deliveryDate")}></input>
      </div>

        {JSON.stringify(deliverySample,null,3)}      
        <hr></hr>
      </div>

    )
    
    }
    export default SampleCarrierProperties;