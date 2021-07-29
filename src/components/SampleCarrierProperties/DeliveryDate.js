import React  from "react";

const DeliveryDate=({changeHandler})=>{

    return(
        <div>
        {"Дата поступления:  "}
        <input type="date" onChange={e=>changeHandler(e.target.value,"deliveryDate")}></input>
      </div>
    )
}

export default DeliveryDate;