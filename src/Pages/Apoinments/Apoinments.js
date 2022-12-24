
import { useState } from 'react';
import ApoinmentsBanner from './ApoinemtsBanner/ApoinmentsBanner';
import AvailableApinmetns from './AvalibleApoinments/AvailableApinmetns';


const Apoinments = () => {
    const [selected,setSelected]=useState(new Date())

    return (
        <div>
           <ApoinmentsBanner  selected={selected} setSelected={setSelected}></ApoinmentsBanner>
           <AvailableApinmetns selected={selected} setSelected={setSelected}></AvailableApinmetns>
          
        </div>
    );
};

export default Apoinments;