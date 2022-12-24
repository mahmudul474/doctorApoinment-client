import React, { useContext } from 'react';
import { format } from 'date-fns';
import { UserContext } from '../../../Context/AuthcontextProvaider';
import { toast } from 'react-hot-toast';



const BookingModal = ({tretment,selected,setTretment,refetch}) => {
    const {name:trementName,slots,}=tretment //defarent name  apoinmen option 
const date=format(selected, 'PP')
const {user}=useContext(UserContext)



const handlebooking=(event)=>{
    event.preventDefault()

    const from=event.target;
    const name=from.name.value;
    const phone=from.phoneNumber.value;
    const email= from.email.value;
    const slot = from.slot.value;

   console.log(slot)
    
   



    const booking={
      trementName:trementName,
      presentname:name,
      trementDate:date,
      phone:phone,
      email:email,
      bookingdate:date,
      slot,
      

    }

    console.log(booking)


fetch("http://localhost:5000/booking",{
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(booking)
}).then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.acknowledged){
    refetch()
    toast.success("booking  succesfully ",400000)
  
    setTretment(null)
  }
})


}

    return (
      <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{trementName}</h3>
    <form onSubmit={handlebooking}>
                  
                 
                  <div className="mb-1 sm:mb-2">
                    <input
                     value={date} readOnly
                      
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="date"
                      name="date"
                    />
                  </div>

                  <select name="slot" className="select flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline">
          {
            slots?.map(slot=>  <option  value={slot}>{slot}</option>)
          }
  
</select>





                  <div className="mb-1 sm:mb-2">
                    <input
                    
                      defaultValue={user?.displayName}
                      readOnly
                      required
                      type="text"
                      placeholder='your name'
                      name='name'
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                     
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <input
                    defaultValue={user?.email}
                    readOnly
                    required
                      
                      type="email"
                      placeholder="email"
                      name='email'
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                     
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <input
                    
                      required
                      type="number"
                      placeholder='Phone-Number'
                      name='phoneNumber'
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                     
                    />
                  </div>


                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-900 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Confirm-booking
                    </button>
                  </div>
                
                </form>
  </div>
</div></>
    );
};

export default BookingModal;