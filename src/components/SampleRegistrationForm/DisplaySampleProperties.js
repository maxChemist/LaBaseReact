import React from "react";

const DisplaySampleProperties = ({ SamplePropertiesArr, mainArray,SetReEnter }) =>
{
  var text;
  const arr = mainArray.reduce((acc, rec) => rec[0].title === SamplePropertiesArr[0] ? rec : acc)
 
  return(
  
  SamplePropertiesArr.map((el, i) => {
    const { prefix = '', postfix = '' ,canBeSkiped=''} = arr[i]
    
    !canBeSkiped? text=prefix+el+postfix:text=prefix+"?"+postfix

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
