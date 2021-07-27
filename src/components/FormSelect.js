import React from "react";

const FormSelect=({title, options, onChangeFunction})=>{
    return(
    <div>
        <select onChange={(e)=>onChangeFunction(e.target.value)}>
          <option key={title}>{title} </option>
        {options.map((v)=>(<option key={v} >{v}</option>))}
      </select>
    </div>
    )
    }  

    export default FormSelect;