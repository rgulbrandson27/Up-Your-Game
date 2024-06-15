import React from 'react'

import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4, TbHexagonNumber5 } from "react-icons/tb";


const Hints = ({ selectedWordList }) => {

  return (
    <div className='bg-green-300 h-full w-full'>
      <h3 className='text-center my-3'>HINTS</h3>

      < TbHexagonNumber1 className='h-10 w-full'/>
      < TbHexagonNumber2 className='h-10 w-full'/>  
      < TbHexagonNumber3 className='h-10 w-full'/>  
      < TbHexagonNumber4 className='h-10 w-full'/>
      < TbHexagonNumber5 className='h-10 w-full'/>
    </div>
  )
}

export default Hints;