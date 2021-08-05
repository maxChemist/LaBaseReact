

const readFromBase=()=>{
const rec=localStorage.getItem("myBase")
var obj={}
if (rec.length===0) 
{ return(0) }
 else{ 
    obj=(JSON.parse(rec))
    return(obj)}
}
export default readFromBase;