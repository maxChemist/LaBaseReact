import React  from "react";

const SampleReciever=({sampleReceiver, changeHandler})=>{

    return(
        <div>
        {"Пробу принял:  "}
        <select onChange={e=>changeHandler(e.target.value,"sampleRecieve")}>
          <option key={"Пробу принял"}>{""}</option>
          {sampleReceiver.map((v)=>(<option key={v}>{v}</option>))}
        </select>
      </div>
    )
}

export default SampleReciever;