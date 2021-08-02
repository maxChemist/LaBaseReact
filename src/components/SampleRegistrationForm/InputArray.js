import React from "react";
import {convertLineInNumberArr} from "../Libraries"

const InputArray=({title, arrayInputFuncton,baseKey} )=>{
     
  
    return(
      <div>
        {title}
        <input type="text" onKeyDown={(e)=>
        {if(e.key==="Enter") 
           { const arr=convertLineInNumberArr(e.target.value);
             arrayInputFuncton(arr,baseKey)
               
        }}}></input>
      </div>
    )
  
   }
   export default  InputArray;