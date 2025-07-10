
import React, { useEffect, useState, useRef } from "react";

const CorrectWordList = ({selectedWordList, correctlyGuessedWords, isNewSelection, wordDisplayLetters, currentCorrectGuess}) => {

// const scrollRef = useRef(null);
const wordRefs = useRef([]);  //  for scroll behavior

console.log(currentCorrectGuess);

//  const hasMounted = useRef(false);

useEffect(() => {
  if (currentCorrectGuess) {
    const index = selectedWordList.words.indexOf(currentCorrectGuess);
    if (index !== -1 && wordRefs.current[index]) {
      wordRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center", 
      });
    }
  }
}, [currentCorrectGuess]);





// className="text-xl tracking-wider border-2 hover:border-3 border-blue-800 rounded-md flex place-content-center shadow-none transition-shadow duration-300 ease-in-out 
//           hover:shadow-lg hover:shadow-black/30 hover:bg-pink-300 hover:cursor-pointer p-.5 relative group
//           bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800"    
//           onClick={() => handleSelectionClick(wordListInfo)}>
//  useEffect(() => {
//   scrollRef.current?.scrollIntoView({
//     behavior: "smooth",
//   block: "center",

//   })
// }, [currentCorrectGuess]);

  //  if (!hasMounted.current) {
  //    hasMounted.current = true;
  //    return;
  //  }
  //  console.log('Component updated');
  // }, [currentCorrectGuess]); 

let prevExtraLetter = "";

function extractExtraLetter(listWord, stemWord) {
  for(let i = 0; i < stemWord.length; i++) {
  let letterToRemove = stemWord.charAt(i);
  listWord = listWord.replace(letterToRemove, "");
  }
  return listWord.charAt(0);
}

  // bg-violet-200 

  return (
    <div className="w-screencorrectWordList
    
    bg-gradient-to-br from-pink-300 via-pink-200 to-pink-300 
    
  
    border-2 border-black rounded-md relative lg:mt-6 xl:ml-8">
      <h1 className="word-list-name text-center text-xl font-bold tracking-widest bg-black text-white sticky">
        {selectedWordList.listName}
      </h1>

      <div className="word-list-items overflow-y-auto mt-2" >
        {selectedWordList.words.map((listWord, index) => {
          const extraLetter = extractExtraLetter(
            listWord, 
            selectedWordList.listName
            );
          const displayExtraLetter = extraLetter !== prevExtraLetter;
          prevExtraLetter = extraLetter;
          // ? refers to "optional chaining"
          const isGuessed = correctlyGuessedWords?.includes(listWord);

          return (
            <div 
            ref={(el) => (wordRefs.current[index] = el)} 
              key={index}   
              className="word-list-item grid grid-cols-5 md:grid-cols-6 lg:ml-3 lg:-mr-2 xl:ml-0"
            >
              {displayExtraLetter ? (
              <div className="extra-letter col-span-1 ml-12 text-xl lg:mt-1 font-medium text-center xl:ml-24 xl:pl-2">
                {extraLetter}
              </div>
              ) : (
              <div></div>
              )}
              <div  className="item-number text-md col-span-1 text-center mt-0.5 md:-ml-0 lg:-ml-16 lg:text-xl lg:mt-1 xl:-ml-2  xl:text-start">
                {index + 1} 
              </div>
            
              <div  
                className={`stem-word col-span-2 text-center text-xl text-black bold tracking-[.1em] ml-2 lg:ml-6 lg:mr-4 xl:pl-4 ${
                  isGuessed ? '' : 'invisible'
                  }`}
                  >
                    {listWord}
                      </div>
                        </div>
                        );
                    })}
                    
              </div>
            </div>
);
};
export default CorrectWordList;



