import React from 'react';
import {useEffect, useState, useRef} from 'react';
import tailwindConfig from '../../../tailwind.config';

const IncorrectGuessAlert = ({ incorrectGuessCount, handleRestart }) => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   if (incorrectGuessCount > 0) {
  //     setIsVisible(true);

  //     // Set a timeout to make the alert invisible after 5 seconds
  //     const timer = setTimeout(() => {
  //       setIsVisible(false);
  //     }, 5000); // 5000 milliseconds = 5 seconds

  //     // Cleanup function to clear the timeout if the component unmounts
  //     return () => clearTimeout(timer);
  //   }
  // }, [incorrectGuessCount]);

    return (
        <div className="flex justify-center items-center">
     
          {incorrectGuessCount === 1 && (
            <p className="animate-fade-in-out text-8xl text-red-800 font-bold bg-gray-300 border-solid border-gray-600 border-4 rounded-md mt-4 p-4 opacity-90">X</p>
         )}
          {incorrectGuessCount === 2 && (
            <p className="animate-fade-in-out text-8xl text-red-800 font-bold  bg-gray-300 border-solid border-gray-600 bg-opacity-90 border-4 rounded-md mt-4 p-4">X X</p>
          )}
      {incorrectGuessCount >= 3 && (
        <div className="flex flex-col items-center animate-fade-in bg-gray-300 border-solid border-gray-600 bg-opacity-90 border-4 rounded-md mt-4 p-2">
        <p className="animate-fade-in text-7xl text-red-800 font-bold my-2 mx-12">X X X</p>
        <button className="border-4 rounded-lg border-red-800 text-red-800 text-4 xl tracking-wide font-bold bg-white hover:bg-red-800 hover:text-white py-1 px-3 mt-4 mb-4"
        onClick={handleRestart}>RESTART</button>
        </div>
          )}
          </div>
      );
}
export default IncorrectGuessAlert;
