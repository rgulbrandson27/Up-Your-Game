import { joinPaths } from '@remix-run/router';
import React from 'react'
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4, TbHexagonNumber5 } from "react-icons/tb";

const Hints = ({ selectedWordList, hintsRemaining, hintRequested, cancelHintRequest, setCancelHintRequest, setHintRequested}) => {

const handleHintRequest = () => {
  setHintRequested(true);
};

const handleCancel = () => {
  setHintRequested(false);
  setCancelHintRequest(true);
  console.log(cancelHintRequest);
};

  return (
    
    <button 
        className='hover:bg-green-600 bg-green-300 h-3/4 flex justify-center items-center p-[5px] border-black border-2 rounded-md'
        aria-label="Hint"
        onClick={hintRequested ? handleCancel : handleHintRequest}
      >
        {hintRequested ? 
          <p className="block box-border text-sm hover:bg-green-600">Cancel Hint Request</p>
          :
          <p className="block box-border mr-2 -mb-[1px] text-sm ml-1">Request a Hint</p>
        }
      </button>
    
  )
}
export default Hints;


 // <svg class="w-4 h-4 mx-1 text-gray-800 dark:text-white mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            //   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            // </svg>