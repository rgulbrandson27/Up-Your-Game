import {useState, useEffect} from 'react';
import sixLetterStems from '../../data/bingoStems';

const DateIcon = () => {

    return (
        <div className=" grid-rows-2 h-[34px] w-[34px]">
            <div className="bg-black text-gray-300 text-[8px] h-[30%] border-black rounded-t-lg pt-0.5 flex place-content-center place-items-center tracking-wider">
                <p className="">Feb</p>
            </div>
            <div className="bg-gray-300 h-[70%] border-black border-2 rounded-b-md border-t-2 flex place-content-center place-items-center">
                <p className="text-lg">27</p>
            </div>
        </div>
)
}
export default DateIcon;