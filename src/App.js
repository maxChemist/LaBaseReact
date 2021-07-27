import React, { useState } from "react";
const TaraValue=["0.75","0.7","0.2","3.0" ]
const SapleReceiver=["Сташевский", "Ярушников","Лазарева"]
const SamplCarrier=["Иванов","Петров","Сидоров"]
const TeqStepBlend = ["Приготовление", "Обработка", "Фильтрация"];
const TankType = ["Цистерна", "Дрожжанка", "Бочка"];
const GrapeSort = ["Алиготе", "Виноматериал столовый", "Каберне", "Каберне (по белому)", "Мерло", "Мускат", "Пино", "Пино (по белому)", "Пино Гри", "Пино Нуар", "Пино Фран", "Рислинг", "Ркацители", "Саперави ", "Совиньон", "Фетяска", "Шардоне"];
const VineSupplier = ["Октябрьский", "Каменский"];
const VineColor=["белый", "красный", "розовый"]
const VineType=["для игристых вин", "виноматериал обработанный"]
const Years=()=>{ const d=new Date(); const y=d.getFullYear()+"";return([y,y-1,y-2,y-3,y-4,y-5])}

const mainArray = [
  [
    { title: "Виноматериал", baseKey: "sample",prefix:"" },
    { title: "Партия №", inputTipe: "input", prefix:"П-",baseKey: "number" },
    { title: "Цвет", inputTipe: "select", options:VineColor,prefix:"",baseKey: "color" },
    { title: "Сорт", inputTipe: "select", options: GrapeSort,prefix:"", baseKey: "sort" },
    { title: "Год урожая", inputTipe: "select", options: Years(),prefix:"урожай", baseKey: "cropYear" },
    { title: "Винхоз", inputTipe: "select", options: VineSupplier, prefix:"",baseKey: "vineSupplier" },
    { title: "Тип виноматериала", inputTipe: "select", options: VineType,prefix:"", baseKey: "vineMaterialType" },
    { title: "Приёмка/образец", inputTipe: "select", options: ["приёмка", "образец"],prefix:"", baseKey: "suplyOrExample" }
  ],
  [
    { title: "Ассамбляж", baseKey: "sample" },
    { title: "Партия №", inputTipe: "input", baseKey: "number" },
    {title:"Вошли партии", inputTipe:"array",baseKey:"partyInclude"}
  ],
  [
    { title: "Купаж", baseKey: "sample" },
    { title: "№", inputTipe: "input", baseKey: "number" },
    { title: "Ёмкость", inputTipe: "select", options: TankType, baseKey: "tankType" },
    { title: "Технологический этап", inputTipe: "select", options: TeqStepBlend, baseKey: "teqStep" }
    
  ]
];
const ConvertLineInNumberArr=(text)=>{
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

function getData(name, SequensePropertiesArr, SetSequensePropertiesArr) {
  SetSequensePropertiesArr((prev) => [...prev, name]);
}

const SamplerProps=()=>{
return (
  <div>
    <div>
    {"Объём пробы:  "}
      <select>
        {TaraValue.map((v)=>(<option key={v}>{v}</option>))}
      </select>
    {"  x  "}
    <select>
      <option key={"1"}>{"1"}</option>
      <option key={"2"}>{"2"}</option>
      <option key={"3"}>{"3"}</option>
      <option key={"4"}>{"4"}</option>
      <option key={"5"}>{"5"}</option>
      </select>
    </div>
  <div>
    {"Пробу доставил:  "}
    <select>
      <option key={"Пробу доставил"}>{"    "}</option>
      {SamplCarrier.map((v)=>(<option key={v}>{v}</option>))}
    </select>
  </div>
 
  <div>
    {"Пробу принял:  "}
    <select>
      <option key={"Пробу принял"}>{"    "}</option>
      {SapleReceiver.map((v)=>(<option key={v}>{v}</option>))}
    </select>
  </div>

  <div>
    {"Дата поступления:  "}
    <input type="date" onChange={(e)=>(console.log(e))}></input>
  </div>
  </div>
)

}
const RequestLine = ({ SetSequensePropertiesArr, SequensePropertiesArr,baseRecords }) => {
  const changeHandler = (e) => {
    getData(e, SequensePropertiesArr, SetSequensePropertiesArr,baseRecords);
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

const SequenseProperties = ({ SequensePropertiesArr }) =>
{
  const findPrefix=(index)=>{
   const arr= mainArray.reduce((acc,val,i)=>
     { 
       return( val[0]["title"]===SequensePropertiesArr[0]? val :acc)})[index]["prefix"];
  
       return(arr)
    }
  return(
  SequensePropertiesArr.map((el,i) => (
    <font key={el} >
      {findPrefix(i)+el+"  "}
     </font>
  )));}

function Start() {
  const [SequensePropertiesArr, SetSequensePropertiesArr] = useState([]);
  const [baseRecords, SetBaseRec] = useState({});

  return (
    <div>
      <div>
        <SequenseProperties SequensePropertiesArr={SequensePropertiesArr} />
      </div>
      <div>
        <RequestLine
          SetSequensePropertiesArr={SetSequensePropertiesArr}
          SequensePropertiesArr={SequensePropertiesArr}
          baseRecords={baseRecords}
        />
       </div>
       <div>
         <SamplerProps/>
       </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Start />
    </div>
  );
}
export default App;