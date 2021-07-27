import React from "react";

const DisplaySampleProperties = ({ SamplePropertiesArr, mainArray }) =>
{
  const findPrefix=(index)=>{
   const prefix= mainArray.reduce((acc,val,i)=>   { return( val[0]["title"]===SamplePropertiesArr[0]? val :acc)})[index]["prefix"];
    return(prefix!==undefined?prefix:"")
    }

    const finsPostfix=(index)=>{
        const postfix= mainArray.reduce((acc,val,i)=>   { return( val[0]["title"]===SamplePropertiesArr[0]? val :acc)})[index]["postfix"];
         return(postfix!==undefined?postfix:" ")
         }
  return(
  SamplePropertiesArr.map((el,i) => (
      <button key={el} id={i} onClick={(e)=>(console.log(e.target))}>
    <i>
      {findPrefix(i)+el+finsPostfix(i)} 
     </i>
     </button>
  )));}

  export default DisplaySampleProperties;
