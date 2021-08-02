import React from "react"

 function getUniqueNumber(params) {
    //должен присваивать очередной номер (но пока присваивает случайный)
    const d=new Date(); const y=d.getFullYear()
    const number=String(Math.round(Math.random()*10000)+"-"+y).padStart(9,0)
    return (number) 
  }

  export default getUniqueNumber;