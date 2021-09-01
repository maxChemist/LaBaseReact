export const convertLineInNumberArr = (text) => text.split(/[^0-9]+/).filter(el => el !== '').map(el => Number(el))

export const isEmpty = obj => Object.keys(obj).length === 0

export const formStringFromSubMenuData=(obj, arr)=>{
   
    const keyArr= Object.keys(obj)
    const textArr=keyArr.map((v,i)=>{
      const { prefix = '', postfix = '' ,canBeSkiped=''} = arr[i]
      return(prefix+obj[v]+postfix)

    })
    return textArr

}
