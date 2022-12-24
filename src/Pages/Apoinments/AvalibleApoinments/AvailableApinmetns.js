import React, { useState } from 'react';
import { format } from 'date-fns';
import ApoinmentsOptions from '../ApoimentOption/ApoinmentsOptions';
import BookingModal from '../Booking-modal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Conponents/loading/Loading';
const AvailableApinmetns = ({selected}) => {
const  date=format(selected, 'PP')
    
    const [tretment,setTretment] = useState(null)

  const{data:apoinmetnsoption=[],refetch,isLoading}=useQuery({
    queryKey:['apoinmetnsoption',date],
    queryFn:async()=>{
       const res=await  fetch(`http://localhost:5000/apoinmentoption?date=${date}`)
       const data=await res.json()
       return data
    }
  })

  if(isLoading){
    return <Loading></Loading>
  }



    return (
        <div>
<p className='text-2xl text-center font-bold '>You selected {format(selected, 'PP')}.</p>



<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
         {
    
                               apoinmetnsoption.map(option=><ApoinmentsOptions 
                               option={option} key={option._id}
                               setTretment={setTretment}
                               > 
                              </ApoinmentsOptions>)
                      }
</div>
{tretment &&
    <BookingModal tretment={tretment}
    refetch={refetch}
    selected={selected}
    setTretment={setTretment}
    
    ></BookingModal>
}

        </div>
    );
};

export default AvailableApinmetns;