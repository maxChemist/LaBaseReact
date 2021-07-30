import React from "react";

const DisplaySampleProperties = ({ SamplePropertiesArr, mainArray,SetReEnter }) =>
{

  const arr = mainArray.reduce((acc, rec) => rec[0].title === SamplePropertiesArr[0] ? rec : acc)
 
  return(
  
  SamplePropertiesArr.map((el, i) => {
    const { prefix = '', postfix = '' } = arr[i]
    return (
      <button data-step={i} 
      key={el+" "+i}
      onClick={(e) => {
        const step=e.nativeEvent.target.parentElement.dataset.step
        SetReEnter(step)
        
        }}>
        <i>
          {`${prefix}${el}${postfix}`}
        </i>
      </button>
             
              
    )
  }))
}


  export default DisplaySampleProperties;
