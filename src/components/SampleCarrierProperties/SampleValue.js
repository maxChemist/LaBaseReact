
import React, { useState } from "react";


const SampleValue=({taraValue})=>{

    const [lineNumbers, SetLineNumbers]=useState([{"taraValue":taraValue[0],"quantity":1}])
    const drawSelects=(i)=>{

        return(
         <div>   
        <select onChange={valueChanged}>
        {taraValue.map((v)=>(<option key={v}>{v}</option>))}
       </select>  
       {"x"}
       <select>
       <option key={"1"}>{"1"}</option>
       <option key={"2"}>{"2"}</option>
       <option key={"3"}>{"3"}</option>
       <option key={"4"}>{"4"}</option>
       <option key={"5"}>{"5"}</option>
       </select> 
       <button onClick={btnClicked}>+</button>

       </div>   

        )       
    }

    const valueChanged=(e)=>{
      
    }
    const btnClicked=()=> {
        const arr=[...lineNumbers]
        arr.push("12")
        SetLineNumbers(arr)
    }
    
    
   
    return(
       
        <div>
        {"Объём пробы:  "}
        {lineNumbers.map((v)=>(
        
        drawSelects(i)
        ))}  

        </div>
    )

}

export default SampleValue;