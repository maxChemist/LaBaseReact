import React, { useState } from "react";

import RequestLine from "./components/RequestLine"
import DisplaySampleProperties from "./components/DisplaySampleProperties"
import SampleCarrierProperties from "./components/SampleCarrierProperties"


const TaraValue=["0.75","0.7","0.2","3.0" ]
const SampleReceiver=["Сташевский", "Ярушников","Лазарева"]
const SampleCarrier=["Иванов","Петров","Сидоров"]
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
    { title: "Год урожая", inputTipe: "select", options: Years(),postfix:" г. урож.", baseKey: "cropYear" },
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






function Start() {
  const [SamplePropertiesArr, SetSamplePropertiesArr] = useState([]);
  const [baseRecords, SetBaseRec] = useState({});
  const [reEnter,SetReEnter]=useState(0)

  return (
    <div>
      <div>
        <DisplaySampleProperties 
        SamplePropertiesArr={SamplePropertiesArr} 
        mainArray={mainArray}
        />
      </div>
      <div>
        <RequestLine
          SetSamplePropertiesArr={SetSamplePropertiesArr}
          SamplePropertiesArr={SamplePropertiesArr}
          baseRecords={baseRecords}
          mainArray={mainArray}
          reEnter={reEnter}
          SetReEnter={SetReEnter}
          SetBaseRec={SetBaseRec}
        />
       </div>
       <div>
         <SampleCarrierProperties
         baseRecords={baseRecords}
         TaraValue={TaraValue}
         SampleCarrier={SampleCarrier}
         SampleReceiver={SampleReceiver}
         />
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