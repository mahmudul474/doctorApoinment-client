
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Daypiker = ({selected,setSelected}) => {
    
    return (
        <div>
            <DayPicker
            mode='single'
            selected={selected}
           onSelect={(data)=>{
                      if(data){
                      setSelected(data)
                       }}}
   
            ></DayPicker>

            <p><p>You selected {format(selected, 'PP')}.</p></p>
        </div>
    );
};

export default Daypiker;