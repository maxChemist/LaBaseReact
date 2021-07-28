import React from "react";
import FormInput from "./FormInput";
import InputArray from "./InputArray";
import FormSelect from "./FormSelect"

const RequestLine = 
({ SetSamplePropertiesArr, SamplePropertiesArr,baseRecords,SetBaseRec,mainArray,reEnter,SetReEnter }) => {
    const changeHandler = (e,baseKey) => {
        SetSamplePropertiesArr((prev) => [...prev, e]);
        SetBaseRec({...baseRecords,[baseKey]:e })
        SetReEnter(((prev) =>prev+1))
       };
const step=reEnter
   
       if (step===0) //First time start
        {return(
            <FormSelect
            options={mainArray.map((v)=>(v[0]["title"]))}
            title={" Выберите тип образца " }
            onChangeFunction={changeHandler}
            baseKey={"sample"}
             />
        )}
        const SampleArr= mainArray.filter((v,i,a)=>(v[0]["title"]===SamplePropertiesArr[0]))[0] 
    if (SampleArr.length>step)        
      {  const reqSchemArr=SampleArr[step]
      
      switch (reqSchemArr["inputTipe"]){

      
        case "input":  return(
                        <FormInput
                            title={ reqSchemArr["title"]}
                            onInputFunction={changeHandler}
                            baseKey={ reqSchemArr["baseKey"]}
                       />)
        case "select":  return( 
                          <FormSelect
                          options={reqSchemArr["options"]}
                          title={reqSchemArr["title"]}
                          onChangeFunction={changeHandler}
                          baseKey={ reqSchemArr["baseKey"]}
                        />)
        case "array":  return(
                            <InputArray
                                title={ reqSchemArr["title"]}
                                arrayInputFuncton={changeHandler}
                                baseKey={ reqSchemArr["baseKey"]}
                             />)
        break
       }
}

    

return(<div></div>)
}
  export default RequestLine;