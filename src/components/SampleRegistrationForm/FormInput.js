import React from "react";
const FormInput=({title,onInputFunction,baseKey,canBeSkiped})=>{
    return(
      <div>
        {title}
      <input type="text" onKeyDown={(e)=>{if(e.key==="Enter") {onInputFunction(e.target.value.replace(/\s+/g, '').toUpperCase(),baseKey)}}}></input>
      {canBeSkiped && <button onClick={e=>{onInputFunction(null,baseKey)}}>Пропустить</button>}
      </div>
    )
    }
    export default FormInput;