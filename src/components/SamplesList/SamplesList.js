import React, { useState, useTable } from "react";
import WorkPeriod from "./WorkPeriod";
import readFromBase from "../WorkWithBase/readFromBase"
import {mainArray} from "../../initialDate"
import Table from   "./Table"
import {formStringFromSubMenuData} from "../Libraries"

const SamplesList =({signalFlag,setSignalFlag})=>{

const formSampleName=(record)=>{
        
 var text;
  const arr = mainArray.reduce((acc, rec) => rec[0].title === record["sample"] ? rec : acc)
  const valueArr=Object.values(record)

const txtName =valueArr.reduce((acc,el,i)=>{

if (arr[i]["inputType"]==="submenu"){
   const textArr= formStringFromSubMenuData(el,arr[i]["options"].reduce((acc, rec) =>
     rec[0].title === el["name"] ? rec : acc))
     text=textArr.reduce((acc,v)=>(acc+" "+v+" "))
  
}else{
    const { prefix = '', postfix = '' ,canBeSkiped=''} = arr[i]
    !canBeSkiped? text=prefix+el+postfix:text="."
}

return (acc+" "+text+" ")
})
        return(txtName)
}

    const formObjectForTable=()=>{
        var obj={}
        if (readFromBase()===0)
        {
            obj=[{sampleId:" ",strName:" ", deliveryFrom:" "}]
        }
        else{
            obj=readFromBase()
            obj =obj.map((v)=>({sampleId:v["idNumber"],strName:formSampleName(v["sampleName"]),deliveryFrom:v["deliverySample"]["samplingPlace"]}))
        }
    
       
        return (obj)
    }

return (
    <div>
    <hr></hr>    
    {"Список зарегистрированных проб"}
    {/* <WorkPeriod/> */}
    <Table
       tableArr={formObjectForTable()}
       signalFlag={signalFlag}
    />

    </div>
)

}
export default SamplesList;