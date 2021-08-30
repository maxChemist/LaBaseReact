import React from "react";
import FormInput from "./FormInput";
import InputArray from "./InputArray";
import FormSelect from "./FormSelect"
import DateInput from "./DateInput"
import getUniqueNumber from "../WorkWithBase/getUniqueNumber"
import writeToBase from "../WorkWithBase/writeToBase"


const RequestLine = 
({ SetSamplePropertiesArr, SamplePropertiesArr,baseRecords,SetBaseRec,mainArray,reEnter,SetReEnter,deliverySample,signalFlag,setSignalFlag }) => {

   const isDeliverySampleCompleet=()=>{
     if(deliverySample["sampleBring"].length>1 && deliverySample["sampleRecieve"].length>1 && deliverySample["deliveryDate"].length>1)
    {return true}
    else{ return false}

    
  }

  const clickRegistration=()=>{
    const d=new Date(); const t=d.getTime()+""
    const smpl= Object.assign({"idNumber":getUniqueNumber()},{sampleName:baseRecords},{"deliverySample":deliverySample},{"registrationTime":t})
    writeToBase(smpl)
    setSignalFlag(prev=>(prev+1))
    }
  
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
      
      switch (reqSchemArr["inputType"]){

      
        case "input":  return(
                        <FormInput
                            title={ reqSchemArr["title"]}
                            onInputFunction={changeHandler}
                            baseKey={ reqSchemArr["baseKey"]}
                            canBeSkiped={reqSchemArr["canBeSkiped"]}
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
        case "date":  return(  
                              <DateInput
                                title={ reqSchemArr["title"]}
                                onChangeFunction={changeHandler}
                                baseKey={ reqSchemArr["baseKey"]}
                               />) 

        break
       }
}

    
if(isDeliverySampleCompleet())
{

  return(
  <div>  
  <button onClick={clickRegistration}>Зарегистрировать</button>
   </div>
  )
}
return(<div></div>)
}
  export default RequestLine;