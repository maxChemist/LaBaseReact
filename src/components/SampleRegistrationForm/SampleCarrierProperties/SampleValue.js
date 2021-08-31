
import React, { useState } from "react";


const SampleValue=({taraValue, SetDeliverySample, deliverySample})=>{

    const [lineNumbers, SetLineNumbers]=useState([{"taraValue":taraValue[0],"quantity":1}])

    const drawButton=(i,l)=>{
        if(l===1){
        return(<button onClick={plusBtnClicked}>+</button> )}
        else {  
            if(l>1 && i===l-1){
                return(
                 <div>
                <button onClick={plusBtnClicked}>+</button> 
                <button onClick={minusBtnClicked}>-</button>    
                </div>
              )}
            }
        }
    
    const drawSelects=(i,l)=>{

        if (i===l-1)
        {        return(
         <div key={i+" "+l}>   
        <select onChange={e=>valueChanged(e.target.value)}>
        {taraValue.map((v)=>(<option key={v+""+i}>{v}</option>))}
       </select>  
       {"x"}
       <select onChange={e=>quantityChanged(e.target.value)}>
       <option key={"1"+i}>{"1"}</option>
       <option key={"2"+i}>{"2"}</option>
       <option key={"3"+i}>{"3"}</option>
       <option key={"4"+i}>{"4"}</option>
       <option key={"5"+i}>{"5"}</option>
       </select> 
       {drawButton(i,l)}

       </div>   )
        }
       else
       {
          return (           
            <div key={i+" "+l} >
            {`${lineNumbers[i]["taraValue"]} x  ${lineNumbers[i]["quantity"]}`  } 
           </div>)
       }
    }

    const valueChanged=(txt)=>{        
        lineNumbers[lineNumbers.length-1]["taraValue"]=txt
        SetDeliverySample({...deliverySample,"sampleValue":lineNumbers})
    }

    const quantityChanged=(txt)=>{
        lineNumbers[lineNumbers.length-1]["quantity"]=txt
        SetDeliverySample({...deliverySample,"sampleValue":lineNumbers})
    }
    const plusBtnClicked=()=> {
        const arr=[...lineNumbers]
        arr.push({"taraValue":taraValue[0],"quantity":1})
        SetDeliverySample({...deliverySample,"sampleValue":arr})
        SetLineNumbers(arr)
    }
    
    const minusBtnClicked=()=>{
        const arr=[...lineNumbers]
        arr.pop()
        SetDeliverySample({...deliverySample,"sampleValue":arr})
        SetLineNumbers(arr)

    }
    
   
    return(
       
        <div>
        {"Объём пробы:  "}
        {lineNumbers.map((v,i,a)=>(
        
        drawSelects(i,a.length)
        ))}  
        
        </div>
    )

}

export default SampleValue;