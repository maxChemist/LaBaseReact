import React from "react";
import {convertLineInNumberArr} from "../Libraries"

const InputArray=({title, arrayInputFuncton,baseKey,canBeSkiped} )=>{
     
  
    return(
      <div>
        {title}
        <input type="text" onKeyDown={(e)=>
        {if(e.key==="Enter") 
           { const arr=convertLineInNumberArr(e.target.value);
             arrayInputFuncton(arr,baseKey)
               
        }}}></input>
        {canBeSkiped && <button onClick={e=>{arrayInputFuncton(null,baseKey)}}>Пропустить</button>}
      </div>
    )
  
   }
   export default  InputArray;