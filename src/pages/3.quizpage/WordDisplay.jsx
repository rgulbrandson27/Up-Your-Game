
import React from 'react';

const WordDisplay = ({selectedWordList}) => {

  const stemWord = selectedWordList.listName;
  let stemWordLetters;
  
    function separateLetters() {          //puts letters into an array so they can be mapped over
      stemWordLetters = selectedWordList.listName.split("");
        // console.log(stemWordLetters);
    }
  
  separateLetters(stemWord);

  // console.log(selectedWordList.hasOwnProperty('listName'));

  return (
    
    // <div className="wordDisplay border-2 bg-yellow-100 border-blue-700 rounded p-0.5 mt-1 md:mt-3 px-3 justify-center flex flex-grow-0 flex-shrink py-2">
          <div className="wordDisplay border-2 bg-yellow-100 border-blue-700 p-2">

          <div className="flex justify-center">
            {stemWordLetters.map((stemWord, index) => {
            const stemLetter = separateLetters(stemWord);
            
            return (
              // <div key={index} className="letter-box flex border-b-2 border-purple-700 w-1/7 aspect-square place-items-center place-content-center flex-shrink text-xl sm:text-4xl md:text-6xl lg:text-8xl py-1" id="letterSpace1">{stemWordLetters}</div>
              <div key={index} className="letter-box text-4xl w-1/7 border-b-2">{stemWordLetters}</div>
            )

            })}
          </div>
          {console.log()}
    </div>

  );
};


export default WordDisplay;

