import React from 'react';

const ApoinmentsOptions = ({option,setTretment}) => {

    const{name,slots, _id,}=option
    return (
        <div className="card shadow-2xl">
  <div className="card-body">
    <h2 className="card-title text-center my-3 mx-auto">{name}</h2>
    <p>{slots.length>0? slots[0] : "try another day"}</p>
    <p>{slots.length} {slots.length>1? 'spaces' : "space"} available</p>

    <div className="card-actions justify-center ">
    
      <label onClick={()=>setTretment(option)} htmlFor="booking-modal" className="btn ">Book Apoinment</label>
    </div>
  </div>
</div>
    );
};

export default ApoinmentsOptions;