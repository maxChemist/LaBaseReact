import React  from "react";

const SamplingPlace=({changeHandler,samplingPlace})=>{
return(
    <div>
    {"Откуда поступила проба:  "}
    <select  onChange={e=>changeHandler(e.target.value,"samplingPlace")}     >
        {samplingPlace.map((v)=>(<option key={v}>{v}</option>))}
    </select>
  </div>
)
}

export default SamplingPlace;