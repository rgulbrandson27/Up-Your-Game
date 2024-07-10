import {useState, useEffect} from 'react';
import sixLetterStems from '../../data/bingoStems';

const DateIcon = ( { date }) => {

    const parsedDate = new Date(date);

    const month = parsedDate.toLocaleString('default', { month: 'short' })
    const day = parsedDate.getDate();
    return (
        <div className=" grid-rows-2 h-[34px] w-[34px]">
            <div className="bg-black text-gray-300 text-[8px] h-[30%] border-black rounded-t-lg pt-0.5 flex place-content-center place-items-center tracking-wider">
                <p className="">{month}</p>
            </div>
            <div className="bg-gray-300 h-[70%] border-black border-2 rounded-b-md border-t-2 flex place-content-center place-items-center">
                <p className="text-lg">{day}</p>
            </div>
        </div>
)
}
export default DateIcon;