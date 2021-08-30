export const samplingPlace=["Винцех", "Рампа", "Тиражный цех"]
export const taraValue=["0.75","0.7","0.2","3.0" ]
export const sampleReceiver=["Сташевский", "Ярушников","Лазарева"]
export const sampleDeliveryman=["Иванов","Петров","Сидоров"]
export const TeqStepBlend = ["Приготовление", "Обработка", "Фильтрация"];
export const blendDestiny=["РД","ТВ","СТ","для тиражного ликёра","для экспедиционного ликёра", "для сахарного ликёра"]
export const cuveDestiny=["РД","ТВ"]
export const corkType=["пэт","агломерат","двухдисковая","винт."]
export const TeqStepSparkling=["Розлив", "контрольная выдержка"]
export const sparklingType=["экстра брют","брют", "сухое", "полусухое", "полусладкое", "сладкое"]
export const TeqStepAssemblage=["Приготовление","Обработка","Перекачка"]
export const TeqStepCuve=["40-дневное","после перекладки","загрузка на ремюаж","на ремюаже", "перед подачей в ЦВВИВ" ]
export const TankType = ["Цистерна", "Дрожжанка", "Бочка"];
export const GrapeSort = ["Алиготе", "Виноматериал столовый", "Каберне", "Каберне (по белому)", "Мерло", "Мускат", "Пино", "Пино (по белому)", "Пино Гри", "Пино Нуар", "Пино Фран", "Рислинг", "Ркацители", "Саперави ", "Совиньон", "Фетяска", "Шардоне"];
export const tableVineType=["сухое","полусладкое"]
export const VineSupplier = ["Октябрьский", "Каменский"];
export const VineColor=["белый", "красный", "розовый"] 
export const VineType=["для игристых вин", "виноматериал обработанный"]
export const Years=()=>{ const d=new Date(); const y=d.getFullYear()+"";return([y,y-1,y-2,y-3,y-4,y-5])}

export const mainArray = [
  
    [
      { title: "Виноматериал", baseKey: "sample" },
      { title: "Партия №", inputType: "input", prefix:"П-",baseKey: "number" },
      { title: "Цвет", inputType: "select", options:VineColor,baseKey: "color" },
      { title: "Сорт", inputType: "select", options: GrapeSort, baseKey: "sort" },
      { title: "Год урожая", inputType: "select", options: Years(),postfix:" г. урож.", baseKey: "cropYear" },
      { title: "Винхоз", inputType: "select", options: VineSupplier, prefix:"",baseKey: "vineSupplier" },
      { title: "Тип виноматериала", inputType: "select", options: VineType, baseKey: "vineMaterialType" },
      { title: "Приёмка/образец", inputType: "select", options: ["приёмка", "образец"], baseKey: "suplyOrExample" }
    ],
    [
      { title: "Ассамбляж", baseKey: "sample" },
      { title: "асс. №", prefix:" №",inputType: "input", baseKey: "number" },
      { title: "Цвет", inputType: "select", options:VineColor,baseKey: "color" },
      { title: "Сорт", inputType: "select", options: GrapeSort, baseKey: "sort" },
      { title:"Вошли партии", prefix:" вошли партии: ",inputType:"array",baseKey:"partyInclude"},
      { title: "Год урожая", inputType: "select", options: Years(),postfix:" г. урож.", baseKey: "cropYear" },
      { title: "Ёмкость", inputType: "select", options: TankType, baseKey: "tankType" },
      { title: "№ ёмкости", inputType: "input",prefix:"№" , baseKey: "tankNumber" },
      { title: "Количество", inputType: "input",  postfix:" дал ",baseKey: "volume" },
      { title: "Технологический этап", inputType: "select", options: TeqStepBlend, baseKey: "teqStep" } 
    ],
    [
      { title: "Купаж", baseKey: "sample" },
      { title: "№", inputType: "input", baseKey: "number" },
      {title:"Направление", inputType:"select",options:blendDestiny,baseKey:"blendDestiny" },
      { title: "Ёмкость", inputType: "select", options: TankType, baseKey: "tankType" },
      { title: "№ ёмкости", inputType: "input",prefix:"№" , baseKey: "tankNumber" },
      { title: "Количество", inputType: "input",  postfix:" дал ",baseKey: "volume" },
      { title: "Технологический этап", inputType: "select", options: TeqStepBlend, baseKey: "teqStep" } 
    ],
    [
      { title: "Купаж СТР", baseKey: "sample" },
      { title: "№", inputType: "input", baseKey: "number" },
      { title: "Цвет", inputType: "select", options:VineColor,baseKey: "color" },
      { title: "Марка столового", inputType: "select", options:tableVineType,baseKey: "tableVineType" },    
      { title: "Купаж СТ №", inputType: "input", baseKey:"blendTable"},
      { title: "Ёмкость", inputType: "select", options: TankType, baseKey: "tankType" },
      { title: "№ ёмкости", inputType: "input",prefix:"№" , baseKey: "tankNumber" },
      { title: "Количество", inputType: "input",  postfix:" дал ",baseKey: "volume" },
      { title: "Технологический этап", inputType: "select", options: TeqStepBlend, baseKey: "teqStep" } 
    ],
    [
      { title: "Кюве", baseKey: "sample" },
      { title: "№", inputType: "input",prefix:"бут ", baseKey: "number" },
      { title: "Цвет", inputType: "select", options:VineColor,baseKey: "color" },
      { title:"Направление", inputType:"select",options:cuveDestiny,baseKey:"cuveDestiny" },
      { title: "Технологический этап", inputType: "select", options: TeqStepCuve, baseKey: "teqStep" },
      { title: "Год тиража", inputType: "select", options: Years(),postfix:" г. тиража.", baseKey: "tirageYear"},
      { title:  "№ купажа ", inputType:"array",prefix:"купаж №", baseKey:"blendInCuve"}

    ],
    [
      { title: "Игристое ТВ", baseKey: "sample" },
      { title: "№", inputType: "input",prefix:"П-",canBeSkiped:true, baseKey: "number" },
      { title: "Цвет", inputType: "select", options:VineColor,baseKey: "color" },
      { title:"Марка",inputType:"select",options:sparklingType, baseKey:"sparklingType" },
      { title:"Пробка", inputType:"select", options:corkType, baseKey:"corkType"},      
      { title: "Технологический этап", inputType: "select", options: TeqStepSparkling, baseKey: "teqStep" },
      { title:"Дата розлива", inputType:"date",baseKey:"bottlingDate"}


    ]

  ];
