import React, { useState } from "react";
const TaraValue=["0.75","0.7","0.2","3.0" ]
const SapleReceiver=["Сташевский", "Ярушников","Лазарева"]
const SamplCarrier=["Иванов","Петров","Сидоров"]
const TeqStepBlend = ["Приготовление", "Обработка", "Фильтрация"];
const TankType = ["Цистерна", "Дрожжанка", "Бочка"];
const GrapeSort = ["Алиготе", "Шардоне", "Мерло"];
const VineSupplier = ["Октябрьский", "Каменский"];
const mainArray = [
  [
    { title: "Виноматериал", baseKey: "sample" },
    { title: "Партия №", inputTipe: "input", baseKey: "number" },
    { title: "Сорт", inputTipe: "select", options: GrapeSort, baseKey: "sort" },
    { title: "Винхоз", inputTipe: "select", options: VineSupplier, baseKey: "vineSupplier" },
    { title: "Год урожая", inputTipe: "select", options: [2021,2020,2019], baseKey: "cropYear" }

  ],

  [
    { title: "Купаж", baseKey: "sample" },
    { title: "№", inputTipe: "input", baseKey: "number" },
    { title: "Ёмкость", inputTipe: "select", options: TankType, baseKey: "tankType" },
    { title: "Технологический этап", inputTipe: "select", options: TeqStepBlend, baseKey: "teqStep" },
    {title:"Вошли ассамбляжи", inputTipe:"array",baseKey:"asseblyInclude"}
  ]
];

function getData(name, SequensePropertiesArr, SetSequensePropertiesArr) {
  SetSequensePropertiesArr((prev) => [...prev, name]);
}

const SamplerProps=()=>{
return (
  <div>
    <div>
    {"Объём пробы:  "}
      <select>
        {TaraValue.map((v)=>(<option>{v}</option>))}
      </select>
    {"  x  "}
    <select>
      <option>{"1"}</option>
      <option>{"2"}</option>
      <option>{"3"}</option>
      <option>{"4"}</option>
      <option>{"5"}</option>
      </select>
    </div>
  <div>
    {"Пробу доставил:  "}
    <select>
      <option>{"    "}</option>
      {SamplCarrier.map((v)=>(<option>{v}</option>))}
    </select>
  </div>
 
  <div>
    {"Пробу принял:  "}
    <select>
      <option>{"    "}</option>
      {SapleReceiver.map((v)=>(<option>{v}</option>))}
    </select>
  </div>

  <div>
    {"Дата поступления:  "}
    <input type="date" onChange={(e)=>(console.log(e))}></input>
  </div>
  </div>
)

}
const RequestLine = ({ SetSequensePropertiesArr, SequensePropertiesArr,step }) => {
  const changeHandler = (e) => {
    getData(e.target.value, SequensePropertiesArr, SetSequensePropertiesArr);
     };
const formInput=(title)=>{
    return(
      <div>
        {title}
      <input type="text" onKeyDown={(e)=>{if(e.key==="Enter") {changeHandler(e)}}}></input>
      <button>{"=>"}</button>
     
      </div>
    )
  }
const formSelect=(options, title)=>{
return(
<div>
    <select onChange={changeHandler}>
      <option>{title} </option>
    {options.map((v)=>(<option>{v}</option>))}
  </select>
</div>
)
}  
 const formArray=(title)=>{
 
  return(
    <div>
      {title}
    <input type="text" onKeyDown={(e)=>{if(e.key==="Enter") {changeHandler(e)}}}></input>
    
    </div>
  )

 }

  if (SequensePropertiesArr.length==0)
  {
  return (
    <select onChange={changeHandler}>
      <option>{"Выберите тип образца"} </option>
      {mainArray.map((v, i, a) => (
        <option>{v[0]["title"]}</option>
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
  SequensePropertiesArr.map((el) => (
    <font >
      {el+"  "}
     </font>
  ));

function Start() {
  const [SequensePropertiesArr, SetSequensePropertiesArr] = useState([]);
  
  return (
    <div>
      <div>
        <SequenseProperties SequensePropertiesArr={SequensePropertiesArr} />
      </div>
      <div>
        <RequestLine
          SetSequensePropertiesArr={SetSequensePropertiesArr}
          SequensePropertiesArr={SequensePropertiesArr}
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