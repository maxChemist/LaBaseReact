import React from "react";
import {formStringFromObject} from "../Libraries"

const DisplaySampleProperties = ({ SamplePropertiesArr, mainArray,SetReEnter }) =>
{
  var text;
  const arr = mainArray.reduce((acc, rec) => rec[0].title === SamplePropertiesArr[0] ? rec : acc)
 
  return(
  
  SamplePropertiesArr.map((el, i) => {
    //проверим наличие подобъекта


if (arr[i]["inputType"]==="submenu"){
  console.log(el,el["name"],arr[i]["options"].reduce((acc, rec) => rec[0].title === el["name"] ? rec : acc))
 // formStringFromObject(i,el,arr[i]["options"])

}

    const { prefix = '', postfix = '' ,canBeSkiped=''} = arr[i]
    
    !canBeSkiped? text=prefix+el+postfix:text="."

    return (
      <button data-step={i} 
      key={el+" "+i}
      onClick={(e) => {
        const step=e.nativeEvent.target.parentElement.dataset.step
        SetReEnter(step)
        
        }}>
        <i>
          {text}
        </i>
      </button>
             
              
    )
  }))
}


  export default DisplaySampleProperties;
