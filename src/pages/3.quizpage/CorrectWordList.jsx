
import React, { useEffect, useState, useRef } from "react";

const CorrectWordList = ({selectedWordList, correctlyGuessedWords, isNewSelection, wordDisplayLetters, currentCorrectGuess}) => {

const scrollRef = useRef(null);

 console.log(currentCorrectGuess);

//  const hasMounted = useRef(false);

 useEffect(() => {
  //  if (!hasMounted.current) {
  //    hasMounted.current = true;
  //    return;
  //  }
  //  console.log('Component updated');
  // }, [currentCorrectGuess]); 


//  useEffect(() => {
  // if (scrollRef.current && currentCorrectGuess) {
      if (scrollRef.current && selectedWordList.words.length > 0) {
    const newWordIndex = selectedWordList.words.length - 1;
    const newWordElement = scrollRef.current.children[newWordIndex];
    // const list = scrollRef.current;
    // const items = Array.from(list.children);
    // const currentItem = items.find(item => item.textContent === currentCorrectGuess);

    if (newWordElement) {
      newWordElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'

      });
    }
  }
  }, [currentCorrectGuess]);
      // Calculate the scroll position
      // const listHeight = list.clientHeight;
      // const itemTop = currentItem.offsetTop;
      // const itemHeight = currentItem.clientHeight;
      
      // Scroll the list such that the currentItem is approximately 1/4 from the top
      // list.scrollTop = itemTop - (listHeight / 4) + (itemHeight / 2);

//  currentCorrectGuess.scrollIntoView();
  // scrollIntoView()
  // scrollIntoView(alignToTop)
  // scrollIntoView(scrollIntoViewOptions)

  // true
  // scrollIntoViewOptions: {block: "start", inline: "nearest"}. 
  // scrollIntoViewOptions: {block: "end", inline: "nearest"}
  

  // const element = document.getElementById("box");

  // element.scrollIntoView();
  // element.scrollIntoView(false);
  // element.scrollIntoView({ block: "end" });
  // element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // use scroll-margin-top or scroll-margin-bottom. 

  // #go-to-bottom {
  //   position: absolute;
  //   top: 10px;
    /* Without this, the button will be aligned to the top of the page
    instead of bottom of navbar when scrolled */
  //   scroll-margin-top: 60px;
  // }

  // #go-to-top {
  //   position: absolute;
  //   bottom: 10px;
  //   scroll-margin-bottom: 0;
  // }

//   const goToTop = document.getElementById("go-to-top");
// const goToBottom = document.getElementById("go-to-bottom");
// goToBottom.addEventListener("click", () => {
//   goToTop.scrollIntoView({ behavior: "instant", block: "end" });
// });
// goToTop.addEventListener("click", () => {
//   goToBottom.scrollIntoView({ behavior: "instant", block: "start" });
// });

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
    <div className="correctWordList bg-violet-200 border-2 border-black rounded-md relative">
      <h1 className="word-list-name text-center text-xl font-bold tracking-widest bg-black text-white sticky">
        {selectedWordList.listName}
      </h1>

      <div className="word-list-items overflow-y-auto mt-2 ref={scrollRef} " >
        {selectedWordList.words.map((listWord, index) => {
          const extraLetter = extractExtraLetter(
            listWord, 
            selectedWordList.listName
            );
          const displayExtraLetter = extraLetter !== prevExtraLetter;
          prevExtraLetter = extraLetter;
          // ? refers to "optional chaining"
          const isGuessed = correctlyGuessedWords?.includes(listWord);

          // return (
          //   <div ref={scrollRef} className="max-h-[500px] overflow-y-auto p-4 bg-white border border-gray-300 rounded-lg shadow-md">
          //     {selectedWordList.words.map((word, index) => (
          //       <div key={index} className="py-2 px-4 hover:bg-gray-100">
          //         {word}
          //       </div>
          //     ))}
          //   </div>

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
              <div  className="item-number text-sm col-span-1 text-center mt-1 md:-ml-10 md:mt-1.5 lg:-ml-16 lg:mt-1">
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

