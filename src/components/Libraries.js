export const convertLineInNumberArr = (text) => text.split(/[^0-9]+/).filter(el => el !== '').map(el => Number(el))

export const isEmpty = obj => Object.keys(obj).length === 0

export const formStringFromObject=(i,obj, arr)=>{
    console.log(i,obj, arr)

  //  const arr=mainArray.reduce((acc, rec) => rec[0].title === SamplePropertiesArr[0] ? rec : acc)

}
