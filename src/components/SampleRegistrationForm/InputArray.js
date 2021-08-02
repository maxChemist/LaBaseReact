import React from "react";
import {ConvertLineInNumberArr} from "../Libraries"

const InputArray=({title, arrayInputFuncton,baseKey} )=>{
     
  
    return(
      <div>
        {title}
        <input type="text" onKeyDown={(e)=>
        {if(e.key==="Enter") 
           { const arr=ConvertLineInNumberArr(e.target.value);
             arrayInputFuncton(arr,baseKey)
               
        }}}></input>
      </div>
    )
  
   }
   export default  InputArray;