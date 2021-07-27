 const changeHandler = (e) => {
        SetSequensePropertiesArr((prev) => [...prev, e]);
       };
  const formInput=(title)=>{
      return(
        <div>
          {title}
        <input type="text" onKeyDown={(e)=>{if(e.key==="Enter") {changeHandler(e.target.value)}}}></input>
        <button>{"=>"}</button>
       
        </div>
      )
    }
  const formSelect=(options, title)=>{
  return(
  <div>
      <select onChange={(e)=>changeHandler(e.target.value)}>
        <option key={title}>{title} </option>
      {options.map((v)=>(<option key={v} >{v}</option>))}
    </select>
  </div>
  )
  }  
   const formArray=(title)=>{
   
    return(
      <div>
        {title}
        <input type="text" onKeyDown={(e)=>
        {if(e.key==="Enter") {changeHandler(ConvertLineInNumberArr(e.target.value))
        
        
        }}}></input>
      </div>
    )
  
   }
  
    if (SequensePropertiesArr.length===0)
    {
    return (
      <select onChange={(e)=>changeHandler(e.target.value)}>
        <option key={"Выберите тип образца"}>{"Выберите тип образца"} </option>
        {mainArray.map((v, i, a) => (
          <option key={v[0]["title"]}>{v[0]["title"]}</option>
        ))}
      </select>
    )
    }
  else{
      
        if(mainArray.reduce((acc,val,i)=> {return(val[0]["title"]===SequensePropertiesArr[0]? val :acc)}).length > SequensePropertiesArr.length)
      {
        
       const reqSchemArr=mainArray.reduce((acc,val,i)=>
       { return( val[0]["title"]===SequensePropertiesArr[0]? val :acc)})[SequensePropertiesArr.length];
       console.log(SequensePropertiesArr[0],"  ",reqSchemArr)
       switch (reqSchemArr["inputTipe"]){
        case "input":  return(formInput(reqSchemArr["title"]))
        case "select": return(formSelect(reqSchemArr["options"],reqSchemArr["title"]))
        case "array":  return(formArray(reqSchemArr["title"]))
        break
       }
  
       return(<p></p>)
      }
      else
      {return (<p>{"Конец ввода"}</p>)}
  }
  }