const DateInput=({title, onChangeFunction,baseKey})=>{
    return(
    <div>
        {title}
       <input type="date"   onChange={(e)=>onChangeFunction(e.target.value,baseKey)}></input>
    </div>
    )
    }  

    export default DateInput;