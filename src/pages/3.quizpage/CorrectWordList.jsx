
import React, { useEffect, useState } from "react";

const CorrectWordList = ({selectedWordList, isNewSelection, wordDisplayLetters}) => {

// useEffect(() => {
//   if (selectedWordList.listName !== "SAMPLE") {
  
  
//   }
//   console.log('selectedWordList has changed on quizpage in correctwordlist compoennt:', selectedWordList);
//   }, [selectedWordList, isNewSelection])

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
      <h1 className="word-list-name text-center text-xl font-bold tracking-widest bg-black text-white">{selectedWordList.listName}</h1>
      {/* <ul className="word-list-items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2"> */}
      <div className="word-list-items mt-2">
        {selectedWordList.words.map((listWord, index) => {
          const extraLetter = extractExtraLetter(listWord, selectedWordList.listName);
          const displayExtraLetter = extraLetter !== prevExtraLetter;
          prevExtraLetter = extraLetter;

          return (
            <div key={index} className="word-list-item grid grid-cols-5 md:grid-cols-4">
              {displayExtraLetter ? 
              <div className="extra-letter col-span-1 ml-10 text-xl font-medium text-center md:ml-0">{extraLetter}</div>
              : <div></div>
              }
              <div className="item-number text-sm col-span-1 text-center mt-1 md:-ml-10 md:mt-1.5 lg:-ml-16 lg:mt-1">{index + 1}</div>
              <div className="stem-word col-span-2 md:me-10 lg:me-4 lg:text-left text-center text-xl font-medium tracking-[.1em] ml-2 md:-ml-14 lg:-ml-8">{listWord}</div>
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

