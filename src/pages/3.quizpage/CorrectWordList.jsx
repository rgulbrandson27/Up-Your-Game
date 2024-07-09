
import React, { useEffect, useState, useRef } from "react";

const CorrectWordList = ({selectedWordList, correctlyGuessedWords, isNewSelection, wordDisplayLetters}) => {

  const scrollRef = useRef(null);

 

// useEffect(() => {
//   const timeout = setTimeout(() => {
//   // Scroll to approximately one quarter down the list
//   if (scrollRef.current) {
//     const listHeight = scrollRef.current.clientHeight;
//     scrollRef.current.scrollTop = listHeight / 2;
//   }
// }, 100); 
//   return () => clearTimeout(timeout);
// }, [selectedWordList]);

// useEffect(() => {
//   console.log("selectedWordList changed:", selectedWordList);

//   // Ensure the scrollRef is defined and selectedWordList has words
//   if (scrollRef.current && selectedWordList.words.length > 0) {
//     const newWordIndex = selectedWordList.words.length - 1;
//     const newWordElement = scrollRef.current.children[newWordIndex];
    
//     // Ensure the newWordElement is defined before scrolling
//     if (newWordElement) {
//       const listHeight = scrollRef.current.clientHeight;
//       const elementTop = newWordElement.offsetTop;
//       const elementHeight = newWordElement.clientHeight;
      
//       // Check if the new word is not already visible
//       if (elementTop < listHeight / 4) {
//         scrollRef.current.scrollTop = 0; // Scroll to the top
//       } else {
//         scrollRef.current.scrollTop = elementTop - elementHeight; // Scroll to the new word
//       }
//     }
//   }
// }, [selectedWordList]);

let prevExtraLetter = "";

function extractExtraLetter(listWord, stemWord) {
  for(let i = 0; i < stemWord.length; i++) {
  let letterToRemove = stemWord.charAt(i);
  listWord = listWord.replace(letterToRemove, "");
  }
  return listWord.charAt(0);
}

  return (
    <div className="correctWordList bg-violet-200 border-2 border-black rounded-md">
      <h1 className="word-list-name text-center text-xl font-bold tracking-widest bg-black text-white">
        {selectedWordList.listName}
        </h1>
      <div className="word-list-items mt-2" ref={scrollRef}>
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
              key={index} 
              className="word-list-item grid grid-cols-5 md:grid-cols-4"
            >
              {displayExtraLetter ? (
              <div className="extra-letter col-span-1 ml-10 text-xl font-medium text-center md:ml-0">
                {extraLetter}
              </div>
              ) : (
              <div></div>
              )}
              <div className="item-number text-sm col-span-1 text-center mt-1 md:-ml-10 md:mt-1.5 lg:-ml-16 lg:mt-1">
                {index + 1}
              </div>
            
              <div 
                className={`stem-word col-span-2 md:me-10 lg:me-4 lg:text-left text-center text-xl text-black bold tracking-[.1em] ml-2 md:-ml-14 lg:-ml-8 ${
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

{/* 
  // return (
  //   <div className="correctWordList bg-violet-200 ml-5">
  //     <h1 className="word-list-name text-center text-2xl my-2 font-bold tracking-widest">SATIRE</h1>
  //     <ul className="word-list-items">
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">A</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">ARISTAE</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">A</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">ASTERIA</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">A</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">ATRESIA</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">A</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">BAITERS</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">A</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">BARITES</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">A</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">BAITERS</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">A</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">TERBIAS</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">C</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">ATRESIC</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">C</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">CRISTAE</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">C</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">RACIEST</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">D</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">STEARIC</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">D</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">ARIDEST</div>
  //         </li><li className="word-list-item grid grid-cols-4"></li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">D</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">ASTRIDE</div>
  //         </li><li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">D</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">DIASTER</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">D</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">DISRATE</div>
  //         </li><li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">D</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">STAIDER</div>
  //         </li><li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">D</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">TARDIES</div>
  //         </li>
  //         <li className="word-list-item grid grid-cols-4">
  //           <div className="extra-letter col-span-1 ml-4 text-xl font-medium text-center">D</div>
  //           <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-3">TIRADES</div>
  //         </li><li className="word-list-item grid grid-cols-4"></li>
      
       
    //   </ul>
    // </div>
//   );
// }; */}

