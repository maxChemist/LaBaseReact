import React from "react";
const FormInput=({title,onInputFunction,baseKey})=>{
    return(
      <div>
        {title}
      <input type="text" onKeyDown={(e)=>{if(e.key==="Enter") {onInputFunction(e.target.value.replace(/\s+/g, '').toUpperCase(),baseKey)}}}></input>
      </div>
    )
    }
    export default FormInput;