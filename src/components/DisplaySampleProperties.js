import React from "react";

const DisplaySampleProperties = ({ SamplePropertiesArr, mainArray }) =>
{

  const arr = mainArray.reduce((acc, rec) => rec[0].title === SamplePropertiesArr[0] ? rec : acc)
 
  return SamplePropertiesArr.map((el, i) => {
    const { prefix = '', postfix = '' } = arr[i]
    return (
      <button tag={i} key={el} onClick={(e) => (console.log(e.target.attributes['tag'].value))}>
        <i>
          {`${prefix}${el}${postfix}`}
        </i>
      </button>
    )
  })
}


  export default DisplaySampleProperties;
