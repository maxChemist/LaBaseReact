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
 // export default functioinsLibraries