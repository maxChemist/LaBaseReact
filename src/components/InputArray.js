import React from "react";
import {ConvertLineInNumberArr} from "./Libraries"

const FormArray=({title, arrayInputFuncton} )=>{
   
    return(
      <div>
        {title}
        <input type="text" onKeyDown={(e)=>
        {if(e.key==="Enter") {arrayInputFuncton(ConvertLineInNumberArr(e.target.value))
               
        }}}></input>
      </div>
    )
  
   }
   export default  FormArray;