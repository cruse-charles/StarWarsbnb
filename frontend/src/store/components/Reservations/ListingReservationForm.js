// import { DateRange, DayPicker } from 'react-day-picker';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import React, { useState } from 'react';
import { addDays, format } from 'date-fns';


let today = new Date(Date.now())
let day = today.getDay()
let month = today.getMonth()
let year = today.getYear()

const pastMonth = new Date(year, month, day);
// debugger

// const pastMonth = new Date(2023, 2, 15);


const ListsingReservationForm = () => {

    // const defaultSelected: DateRange = {
    //     from: pastMonth,
    //     to: addDays(pastMonth, 4)
    // };
    // const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

    const [range, setRange] = useState(Date.today)

    let footer = <p>Please pick the first day.</p>;
    if (range?.from) {
      if (!range.to) {
        footer = <p>{format(range.from, 'PPP')}</p>;
      } else if (range.to) {
        footer = (
          <p>
            {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
          </p>
        );
      }
    }
  

    return (
        <>
            <div>
            <DayPicker
                id="test"
                mode="range"
                defaultMonth={pastMonth}
                selected={range}
                footer={footer}
                onSelect={setRange}
            />
            </div>
        </>
    )
}


export default ListsingReservationForm


