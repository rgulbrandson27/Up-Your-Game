import {useState, useEffect} from 'react';
import sixLetterStems from '../../data/bingoStems';
import DateIcon from './DateIcon';
import medal from './images/medal.svg';
import prizeIcon from './images/prize-icon.png'

const MasteredList = () => {

return (

    <div className="px-5 w-full border-4 pb-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* HEADING */}
            <div className="flex place-content-center py-3">  
                <img className="h-8 w-8" src={prizeIcon} alt="trophy icon" />

                <h5 className="text-2xl font-semibold text-gray-900 md:text-3xl
                    mx-4">Mastered
                </h5>
                <img className="h-8 w-8" src={prizeIcon} alt="trophy" />
            </div>   

        {/* WORD LIST */}
        <div className="w-full space-y-2"> 
           
            {sixLetterStems.map((wordsMastered) => (
                <div
                key={wordsMastered.id} 
                className="p-2 grid grid-cols-5 place-items-center font-bold text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-100 group dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white word-list-group">
                    <div className="bg-black text-pink-300 z-10 col-start-0 col-span-1 flex justify-center items-center text-sm rounded-full w-6 h-6">{wordsMastered.id}</div>
                    <div className="w-full -ml-10 col-start-0 col-span-3 text-xl tracking-wider border-2 hover:border-3 border-blue-800 flex place-content-center transition-shadow duration-300 ease-in-out 
                        hover:shadow-md hover:shadow-black-300 hover:bg-pink-300 hover:cursor-pointer
                        bg-gradient-to-r from-pink-300 via-pink-100 to-pink-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg">
                        {wordsMastered.listName}
                    </div>
                    <div className="col-start-5"><DateIcon /> </div>
                </div>
            ))
            }
        </div>
    </div>
        
)


}







export default MasteredList;