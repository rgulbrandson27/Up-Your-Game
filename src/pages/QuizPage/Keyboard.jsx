
import React, { useState } from "react";


//make two board options:  One "ordered" and one "traditional keyboard setup"
//create toggle button



const Keyboard = () => {
    // const [chosenLetter, setChosenLetter] = useState("");
  
    // function handleLetterClick(e) {
    //   const { nodeName, textContent } = e.target;
    //   if (nodeName === "BUTTON") {
    //     setChosenLetter({ textContent });
        // console.log(textContent);
        // console.log(chosenLetter);
    //   }
  
    //   console.log({ chosenLetter });
    // }
  
    return (
      <div className="flex letter-board bg-gray-300 w-full p-3 flex-grow text-2xl lg:text-4xl place-content-center">
        <div className="keyboard-rows-wrapper flex-col p-1 content-center w-12/12 md:w-9/12" >
        {/* onClick={handleLetterClick}> */}
          
          <div className="flex vowel-row border-b-2 border-b-black space-x-3 lg:space-x-4 bg-cyan-200 p-1 place-content-center">
            <button className="letter a-button border-2 w-14 rounded-xl aspect-square  border-blue-900">A</button>
            <button className="letter e-button border-2 w-14 rounded-xl aspect-square  border-blue-900">E</button>
            <button className="letter i-button border-2 w-14 rounded-xl aspect-square  border-blue-900">I</button>
            <button className="letter o-button border-2 w-14 rounded-xl aspect-square  border-blue-900">O</button>
            <button className="letter u-button border-2 w-14 rounded-xl aspect-square  border-blue-900">U</button>
        </div>


          <div className="grid grid-cols-5 md:grid-cols-7 gap-2 lg:gap-3 p-3 bg-pink-300 place-content-center justify-items-center flex-grow mx-auto">
            <button className="letter b-button border-2 w-full max-w-14  rounded-xl aspect-square  border-blue-900">B</button>
            <button className="letter d-button border-2 w-full max-w-14 rounded-xl aspect-square  border-blue-900">C</button>
            <button className="letter c-button border-2 w-full max-w-14 rounded-xl aspect-square  border-blue-900">D</button>
            <button className="letter f-button border-2 w-full max-w-14 rounded-xl aspect-square  border-blue-900">F</button>
            <button className="letter g-button border-2 w-full max-w-14 rounded-xl aspect-square  border-blue-900">G</button>
            <button className="letter h-button border-2 w-full max-w-14 rounded-xl aspect-square  border-blue-900">H</button>
            <button className="letter j-button font-bold border-2 w-full max-w-14 rounded-xl aspect-square  border-blue-900">J</button>
       
            <button className="letter k-button font-bold bg-black-400 border-2 w-14 rounded-xl aspect-square  border-blue-900">K</button>
            <button className="letter l-button border-2 w-14 rounded-xl aspect-square  border-blue-900">L</button>
            <button className="letter m-button border-2 w-14 rounded-xl aspect-square  border-blue-900">M</button>
            <button className="letter n-button border-2 w-14 rounded-xl aspect-square  border-blue-900">N</button>
            <button className="letter p-button border-2 w-14 rounded-xl aspect-square  border-blue-900">P</button>
            <button className="letter q-button font-bold border-2 w-14 rounded-xl aspect-square  border-blue-900">Q</button>
            <button className="letter r-button border-2 w-14 rounded-xl aspect-square  border-blue-900">R</button>
       
            <button className="letter s-button border-2 w-14 rounded-xl aspect-square  border-blue-900">S</button>
            <button className="letter t-button border-2 w-14 rounded-xl aspect-square  border-blue-900">T</button>
            <button className="letter v-button border-2 w-14 rounded-xl aspect-square  border-blue-900">V</button>
            <button className="letter w-button border-2 w-14 rounded-xl aspect-square  border-blue-900">W</button>
            <button className="letter x-button font-bold border-2 w-14 rounded-xl aspect-square  border-blue-900">X</button>
            <button className="letter y-button border-2 w-14 rounded-xl aspect-square  border-blue-900">Y</button>
            <button className="letter z-button font-bold border-2 w-14 rounded-xl aspect-square  border-blue-900">Z</button>
        </div>
  
        <div className="flex row items-center non-letter-button-wrapper mt-2 bg-violet-300 place-content-center">
            <button className="none-button h-8 w-36 text-sm rounded-lg m-2 border border-blue-900">No correct choices </button>
            <button className="not-word-button h-8 w-36 text-sm rounded-lg m-2 border border-blue-900">Not a valid word</button>
        </div>
        </div>
      </div>
      
    );
  };
  



  export default Keyboard;

  
