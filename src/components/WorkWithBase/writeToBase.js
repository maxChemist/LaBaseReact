import React from "react";

 function writeToBase(obj){
    var preObj=localStorage.getItem("myBase")
    var writeObj=null
    var arrObj=[]
      if (preObj==="")
      {
        localStorage.setItem("myBase",JSON.stringify([obj],null,0))
  
      }
      else{
        preObj=localStorage.getItem("myBase")
        arrObj=JSON.parse(preObj)
        arrObj.push(obj)
        localStorage.setItem("myBase",JSON.stringify(arrObj,null,0))
       
      }
    }
export default writeToBase;