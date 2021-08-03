import React, { useState, useTable } from "react";
import WorkPeriod from "./WorkPeriod";
import readFromBase from "../WorkWithBase/readFromBase"


const SamplesList =()=>{


return (
    <div>
    <hr></hr>    
    {"Список зарегистрированных проб"}
    <WorkPeriod/>
    {JSON.stringify(readFromBase(),null,3)}


    </div>

)

}
export default SamplesList;