import React, { useState } from 'react'
import FormSelect from "./FormSelect"
import FormInput from "./FormInput"

const SubMenu=({subMenuArray, title, compleetFunction,baseKey})=>{
    const [step, setStep]=useState(0)
    const [stepArr, setStepArr]=useState([""])
    const [subMenuObj, setSubMenuObj]=useState({})
    
    const changeHandler=(e,baseKey)=>{
        var arr=[...stepArr]
        arr[step]=e
        setStepArr(arr)
        setSubMenuObj({...subMenuObj,[baseKey]:e})
        setStep(step+1)
        
    }

    if (step===0){
        return(
            <FormSelect
            options={subMenuArray.map((v)=>(v[0]["title"]))}
            title={title}
            onChangeFunction={changeHandler}
            baseKey={"name"}
            
            />

        )
    }

    const SampleArr= subMenuArray.filter((v,i,a)=>
    (v[0]["title"]===stepArr[0]))[0]

    if (SampleArr.length>step)        
      {  const reqSchemArr=SampleArr[step]
      
      switch (reqSchemArr["inputType"]){

      
        case "input":  return(
                        <FormInput
                            title={ reqSchemArr["title"]}
                            onInputFunction={changeHandler}
                            baseKey={ reqSchemArr["subMenuKey"]}
                            canBeSkiped={reqSchemArr["canBeSkiped"]}
                         />)
        case "select":  return( 
                            <FormSelect
                            options={reqSchemArr["options"]}
                            title={reqSchemArr["title"]}
                            onChangeFunction={changeHandler}
                            baseKey={ reqSchemArr["subMenuKey"]}
                            canBeSkiped={reqSchemArr["canBeSkiped"]}
                          />)
        break
       }
}

compleetFunction(subMenuObj,baseKey)

    return(
        <div>

        </div>
    )
}
export default SubMenu