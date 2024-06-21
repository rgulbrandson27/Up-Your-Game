import React from 'react'

import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4, TbHexagonNumber5 } from "react-icons/tb";


const Hints = ({ selectedWordList, hintsRemaining, hintRequested, setHintRequested, onClick}) => {

  return (
    <button 
        className='bg-green-300 h-full w-full flex justify-around pt-1'
        onClick={onClick}
        aria-label="Hint"
      >
     <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </svg>
{/* 
      <svg className="w-4 h-6 ml-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
      </svg> */}
      <h2 className="mr-2">4</h2>
      {/* <h3>{hintsRemaining}</h3> */}


    
      </button>
  )
}

export default Hints;