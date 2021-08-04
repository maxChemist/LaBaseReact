import React, { useState, useTable } from "react";
import WorkPeriod from "./WorkPeriod";
import readFromBase from "../WorkWithBase/readFromBase"
import {mainArray} from "../initialDate"
import Table from   "./Table"

const SamplesList =({signalFlag,setSignalFlag})=>{

const formSampleName=(record)=>{
        

        const SampleArr= mainArray.filter((v,i,a)=>(v[0]["title"]===record["sample"]))[0]
        var dataFromRecord=Object.values(record)
        var strName=dataFromRecord.reduce((acc,v,i,a)=>{
                const { prefix = '', postfix = '' } = SampleArr[i];
                return (acc+" "+prefix+v+postfix)
        
            })

        return(strName)
    }

    const formObjectForTable=()=>{
        const obj=readFromBase()
        const tableArr =obj.map((v)=>({sampleId:v["idNumber"],strName:formSampleName(v["sampleName"]),deliveryFrom:v["deliverySample"]["samplingPlace"]}))
        return (tableArr)
    }
    
        console.log(signalFlag)
    
 

return (
    <div>
    <hr></hr>    
    {"Список зарегистрированных проб"}
    <WorkPeriod/>
    <Table

            tableArr={formObjectForTable()}
    />

    </div>
)

}
export default SamplesList;