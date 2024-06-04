
import React, { useEffect, useState } from "react";

const CorrectWordList = ({selectedWordList, isNewSelection, stemWordLetters}) => {

// const sixLetterStems_2_SATIRE = ["ARISTAE", "ASTERIA", "ATRESIA", "BAITERS", "BARITES", "REBAITS", "TERBIAS", "ATRESIC", "CRISTAE", "RACIEST", "STEARIC", "ARIDEST", "ASTRIDE", "DIASTER", "DISRATE", "STAIDER", "TARDIES", "TIRADES", "AERIEST", "SERIATE", "FAIREST", "AIGRETS", "GAITERS", "SEAGIRT", "STAGIER", "TRIAGES", "HASTIER", "AIRIEST", "REALIST", "RETAILS", "SALTIER", "SALTIRE", "SLATIER", "TAILERS", "IMARETS", "MAESTRI", "MISRATE", "SMARTIE", "ANESTRI", "ANTSIER", "NASTIER", "RATINES", "RETAINS", "RETINAS", "RETSINA", "STAINER", "STEARIN", "PARTIES", "PASTIER", "PIASTER", "PIASTRE", "PIRATES", "PRATIES", "TRAIPSE", "ARTSIER", "TARRIES", "TARSIER", "ARTSIES", "SATIRES", "ARTIEST", "ARTISTE", "ATTIRES", "IRATEST", "RATITES", "STRIATE", "TASTIER", "RAVIEST", "VASTIER", "VERITAS", "WAISTER", "WAITERS", "WARIEST", "WASTRIE"];  
// const stemWord = "Satire"  

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
  // let extraLetter = listWord;
  // console.log(extraLetter);
  // }
}


  return (
    <div className="correctWordList bg-violet-200 border-2 border-black rounded-md">
      <h1 className="word-list-name text-center text-xl font-bold tracking-widest bg-black text-white">{selectedWordList.listName}</h1>
      {/* <ul className="word-list-items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2"> */}
      <div className="word-list-items mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {selectedWordList.words.map((listWord, index) => {
          const extraLetter = extractExtraLetter(listWord, selectedWordList.listName);
          const displayExtraLetter = extraLetter !== prevExtraLetter;
          prevExtraLetter = extraLetter;

          return (
    
            <div key={index} className="word-list-item grid grid-cols-4">
         
              {displayExtraLetter ? 
              <div className="extra-letter col-span-1 ml-5 text-xl font-medium text-center">{extraLetter}</div>
              : <div></div>
              }
              <div className="stem-word col-span-3 text-xl font-medium tracking-widest ml-6">{listWord}</div>
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

