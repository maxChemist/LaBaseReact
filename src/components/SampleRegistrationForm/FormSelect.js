import React from "react";

const FormSelect=({title, options, onChangeFunction,baseKey,canBeSkiped})=>{
    return(
    <div>
        <select onChange={(e)=>onChangeFunction(e.target.value,baseKey)}>
          <option key={title}>{title} </option>
        {options.map((v)=>(<option key={v} >{v}</option>))}
      </select>
      {canBeSkiped && <button onClick={e=>{onChangeFunction(null,baseKey)}}>Пропустить</button>}
    </div>
    )
    }  

    export default FormSelect;