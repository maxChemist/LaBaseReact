import React from "react";
import FormInput from "./FormInput";

import FormSelect from "./FormSelect"

const RequestLine = 
({ SetSamplePropertiesArr, SamplePropertiesArr,baseRecords,mainArray,reEnter }) => {
    const changeHandler = (e) => {
        SetSamplePropertiesArr((prev) => [...prev, e]);
       };
       var step=0
       const arrLength=SamplePropertiesArr.length
       console.log(step,arrLength,  reEnter,SamplePropertiesArr)

       if(arrLength!==undefined) 
        { reEnter!==undefined?step=reEnter:step=arrLength  }
       else step=0
    console.log("step ",step)
       if (step===0) //First time start
        {return(
            <FormSelect
            options={mainArray.map((v)=>(v[0]["title"]))}
            title={" Выберите тип образца " }
            onChangeFunction={changeHandler}
             />
        )}

        const reqSchemArr=mainArray.reduce((acc,val,i)=>
       { return( val[0]["title"]===SamplePropertiesArr[0]? val :acc)})[step];
       console.log(reqSchemArr)
            
       switch (reqSchemArr["inputTipe"]){

      
        case "input":  return(
                        <FormInput
                            title={ reqSchemArr["title"]}
                            onInputFunction={changeHandler}
                       />)
        case "select":  return( 
                          <FormSelect
                          options={reqSchemArr["options"]}
                          title={" Выберите тип образца " }
                          onChangeFunction={changeHandler}
                        />)
        case "array":  return(
                            <FormInput
                                title={ reqSchemArr["title"]}
                                arrayInputFuncton={changeHandler}
                             />)
        break
       }


    

return(<div></div>)
}
  export default RequestLine;