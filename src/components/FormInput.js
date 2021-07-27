import React from "react";
const FormInput=({title,onInputFunction})=>{
    return(
      <div>
        {title}
      <input type="text" onKeyDown={(e)=>{if(e.key==="Enter") {onInputFunction(e.target.value)}}}></input>
      <button>{"=>"}</button>
     
      </div>
    )
    }
    export default FormInput;