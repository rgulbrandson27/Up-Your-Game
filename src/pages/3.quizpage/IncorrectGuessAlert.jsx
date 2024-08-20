import React from 'react';
import {useEffect, useState, useRef} from 'react';

const IncorrectGuessAlert = ({ incorrectGuessCount, handleRestart }) => {


    return (
<div className="flex justify-center items-center">
      {incorrectGuessCount === 1 && (
        <p className="text-9xl text-red-700 font-bold">X</p>
      )}
      {incorrectGuessCount === 2 && (
        <p className="text-9xl text-red-700 font-bold">X X</p>
      )}
      {incorrectGuessCount >= 3 && (
        <div className="flex flex-col items-center">
        <p className="text-9xl text-red-700 font-bold">X X X</p>
        <button className="border-4 rounded-lg border-red-800 text-red-800 text-4xl tracking-wide font-bold bg-white hover:bg-red-800 hover:text-white py-1 px-3 mt-6"
        onClick={handleRestart}>RESTART</button>
        </div>
      )}
    </div>
      );
}
export default IncorrectGuessAlert;
