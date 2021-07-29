import React  from "react";

const SampleBring = ({sampleDeliveryman,changeHandler})=>{

    return(
        <div>
        {"Пробу доставил:  "}
        <select onChange={e=>changeHandler(e.target.value,"sampleBring")}>
          <option key={"Пробу доставил"}>{""}</option>
          {sampleDeliveryman.map((v)=>(<option key={v}>{v}</option>))}
        </select>
      </div>
    )
}

export default SampleBring;