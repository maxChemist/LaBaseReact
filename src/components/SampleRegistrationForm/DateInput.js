const DateInput=({title, onChangeFunction,baseKey,canBeSkiped})=>{
    return(
    <div>
        {title}
       <input type="date"   onChange={(e)=>onChangeFunction(e.target.value,baseKey)}></input>
       {canBeSkiped && <button onClick={e=>{onChangeFunction(null,baseKey)}}>Пропустить</button>}
    </div>
    )
    }  

    export default DateInput;