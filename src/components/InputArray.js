import React from "react";
import {ConvertLineInNumberArr} from "./Libraries"

const InputArray=({title, arrayInputFuncton,baseKey} )=>{
     
    return(
      <div>
        {title}
        <input type="text" onKeyDown={(e)=>
        {if(e.key==="Enter") {arrayInputFuncton(ConvertLineInNumberArr(e.target.value,baseKey))
               
        }}}></input>
      </div>
    )
  
   }
   export default  InputArray;