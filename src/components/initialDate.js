export const samplingPlace=["Винцех", "Рампа", "Тиражный цех"]
export const taraValue=["0.75","0.7","0.2","3.0" ]
export const sampleReceiver=["Сташевский", "Ярушников","Лазарева"]
export const sampleDeliveryman=["Иванов","Петров","Сидоров"]
export const TeqStepBlend = ["Приготовление", "Обработка", "Фильтрация"];
export const TankType = ["Цистерна", "Дрожжанка", "Бочка"];
export const GrapeSort = ["Алиготе", "Виноматериал столовый", "Каберне", "Каберне (по белому)", "Мерло", "Мускат", "Пино", "Пино (по белому)", "Пино Гри", "Пино Нуар", "Пино Фран", "Рислинг", "Ркацители", "Саперави ", "Совиньон", "Фетяска", "Шардоне"];
export const VineSupplier = ["Октябрьский", "Каменский"];
export const VineColor=["белый", "красный", "розовый"] 
export const VineType=["для игристых вин", "виноматериал обработанный"]
export const Years=()=>{ const d=new Date(); const y=d.getFullYear()+"";return([y,y-1,y-2,y-3,y-4,y-5])}

export const mainArray = [
  
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
      {title:"Вошли партии", prefix:"Вошли партии: ",inputTipe:"array",baseKey:"partyInclude"}
    ],
    [
      { title: "Купаж", baseKey: "sample" },
      { title: "№", inputTipe: "input", baseKey: "number" },
      { title: "Ёмкость", inputTipe: "select", options: TankType, baseKey: "tankType" },
      { title: "Технологический этап", inputTipe: "select", options: TeqStepBlend, baseKey: "teqStep" }
      
    ]
  ];
