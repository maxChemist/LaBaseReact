import React, { useState } from "react";

const SampleCarrierProperties=({baseRecords,TaraValue,SampleCarrier,SampleReceiver})=>{
   
  return (
      <div>
        <div>
        {"Объём пробы:  "}
          <select>
           {TaraValue.map((v)=>(<option key={v}>{v}</option>))}
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
        <select>
          <option key={"Пробу доставил"}>{"    "}</option>
          {SampleCarrier.map((v)=>(<option key={v}>{v}</option>))}
        </select>
      </div>
     
      <div>
        {"Пробу принял:  "}
        <select>
          <option key={"Пробу принял"}>{"    "}</option>
          {SampleReceiver.map((v)=>(<option key={v}>{v}</option>))}
        </select>
      </div>
    
      <div>
        {"Дата поступления:  "}
        <input type="date" onChange={(e)=>(console.log(e))}></input>
      </div>

      {JSON.stringify(baseRecords,null,3)}
      </div>
    )
    
    }
    export default SampleCarrierProperties;