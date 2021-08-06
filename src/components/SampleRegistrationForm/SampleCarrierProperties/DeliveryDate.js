import React  from "react";

const DeliveryDate=({changeHandler})=>{
  
    return(
      <div>
        
        <div>
          {"Дата поступления:  "}
          <input type="date"   onChange={e=>changeHandler(e.target.value,"deliveryDate")}></input>
        </div>

      </div>
    )
}

export default DeliveryDate;