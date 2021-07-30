import React from "react"
export const ConvertLineInNumberArr=(text)=>{
    //Возвращает массив чисел, воспринимая как разделитель 
    //всё кроме цифр
    const r=[]
    var e=""
    for (var i=0; i<text.length+1;i++){
        if (text[i]>="0" && text[i]<="9")
        {e=e+text[i]}
        else
        {
          if(e!=="") 
          {r.push(e); e=""}
          else
          {e=""}
        }
    }
    return(r)
  
  }

  export function isEmpty(obj) {
    //проверка объекта на "пустотность"
    for(var key in obj)
    {
        return false;
    }
    return true;
}

export function getUniqueNumber(params) {
  //должен присваивать очередной номер (но пока присваивает случайный)
  const d=new Date(); const y=d.getFullYear()
  const number=String(Math.round(Math.random()*10000)+"-"+y).padStart(9,0)
  return (number) 
}

export function writeToBase(obj){
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
      console.log(JSON.parse(localStorage.getItem("myBase")))
    }
  // const readObj=JSON.parse(localStorage.getItem("myBase"))
  // console.log(readObj)
  // readObj.push(JSON.stringify(obj,null,0))
  // localStorage.setItem("myBase",readObj)
  // console.log(readObj)


}