import React from "react";
import FormInput from "./FormInput";
import InputArray from "./InputArray";
import FormSelect from "./FormSelect"

const RequestLine = 
({ SetSamplePropertiesArr, SamplePropertiesArr,baseRecords,SetBaseRec,mainArray,reEnter,SetReEnter }) => {

  const changeHandler = (e,baseKey) => {
       
        const arr=SamplePropertiesArr
        arr[reEnter]=e
        SetSamplePropertiesArr(arr);
        SetBaseRec({...baseRecords,[baseKey]:e })
        SetReEnter(arr.length)
 };
  
       if (reEnter+""==="0") //First time start
       {
        SamplePropertiesArr=[]
        baseRecords={};
         return(
            <FormSelect
            options={mainArray.map((v)=>(v[reEnter]["title"]))}
            title={" Выберите тип образца " }
            onChangeFunction={changeHandler}
            baseKey={"sample"}
             />
        )}
        const SampleArr= mainArray.filter((v,i,a)=>(v[0]["title"]===SamplePropertiesArr[0]))[0] 


    if (SampleArr.length>reEnter)        
      {  const reqSchemArr=SampleArr[reEnter]
      
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