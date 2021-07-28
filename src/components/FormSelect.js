import React from "react";

const FormSelect=({title, options, onChangeFunction,baseKey})=>{
    return(
    <div>
        <select onChange={(e)=>onChangeFunction(e.target.value,baseKey)}>
          <option key={title}>{title} </option>
        {options.map((v)=>(<option key={v} >{v}</option>))}
      </select>
    </div>
    )
    }  

    export default FormSelect;