import React from 'react';
import { useState, useEffect, useRef } from 'react';
import DifficultyLevels from './DifficultyLevels';
import CorrectWordList from './CorrectWordList';
import Keyboard from './Keyboard';
import WordDisplay from './WordDisplay';
import Hints from './Hints';
import Mneumonic from './Mneumonic';
import PropTypes from 'prop-types';

const QuizPage = ({selectedWordList}) => {

const [wordDisplayLetters, setWordDisplayLetters] = useState([]);
const [hintsRemaining, setHintsRemaining] = useState([10]);
const [hintRequested, setHintRequested] = useState(false);

useEffect(() => {
  console.log("selectedWordList has passed to quizpage:", selectedWordList);
  setWordDisplayLetters(selectedWordList.listName.split(""));
  console.log(wordDisplayLetters);
}, [selectedWordList]);

useEffect(() => {
  if (hintRequested)
  console.log("A hint has been requested");
}, [hintRequested]);

const handleHintClick = () => {
  setHintRequested(true);
}

  return (
    <div className="flex justify-center mt-4">
{/* DON'T DELETE */}
    {/* <div className="relative">
      <div className="bg-[purple] h-[300px] w-[300px] absolute overflow-hidden">
        <div className="absolute conic-background h-[500px] w-[500px] animate-spin top-[-35%] right-[-35%]" style={{ animationDuration: '4s' }}></div>
        </div>
      <div className="bg-blue-300 h-[280px] w-[280px] ml-[10px] mt-[10px] relative"></div>
    </div> */}

      <div className="grid grid-cols-12 grid-rows-12 w-screen h-screen flex-grow-0">
        <h1 className="col-span-12 row-span-1 row-start-0 text-center text-2xl lg:text-3xl -mt-2 sm:mt-1 lg:pt-3">{selectedWordList.listName} ({selectedWordList.id})</h1>
        <div 
            className="grid row-start-2 row-span-2 mb-10 col-start-2 col-span-10 mt-10
            sm:mt-16
            md:row-start-2 md:col-start-2 md:col-span-6 md:mb-10
            lg:col-start-3 lg:col-span-5 lg:row-start-3">
            <WordDisplay selectedWordList={selectedWordList} wordDisplayLetters={wordDisplayLetters} hintRequested={hintRequested}/>
        </div>
        <div className="correct-word-list grid col-span-6 col-start-4 row-span-7 row-start-5 mt-2 overflow-scroll
          sm:row-start-6
          md:row-start-2 md:mt-4 md:row-span-9 md:col-start-9 md:col-span-4 md:-ml-2 md:mr-4
  
          lg:row-start-3 lg:rows-span-8 lg:col-start-9 lg:col-span-3 lg:mr-4 lg:ml-4">
            < CorrectWordList selectedWordList={selectedWordList} wordDisplayLetters={wordDisplayLetters}/>
        </div>

 
          <div className="grid row-start-2 row-span-1 col-start-3 col-span-4 -mt-4 mb-14 ml-2 p-0 text-sm
           sm:mt-1
          md:row-start-6 md:col-start-2 md:col-span-3 md:mr-2 md:-mt-4
          lg:col-start-3 lg:row-start-7 lg:col-span-2 lg:ml-8 lg:mt-5">
          < Hints
              hintRequested = {hintRequested}
              setHintRequested = {setHintRequested}
              onClick={handleHintClick} />
          </div>

          <div className="grid row-start-2 row-span-1 col-start-7 col-span-4 -mt-4 mb-14 p-0 text-sm ml-4
          sm:mt-1
          md:row-start-6 md:col-start-5 md:col-span-3 md:-mt-4
          lg:col-start-6 lg:row-start-7 lg:col-span-2 lg:mr-2 lg:ml-4 lg:mt-5">
              < Mneumonic />
          </div>


          </div>
        </div>
     
      
    );
  };
  
  export default QuizPage;
  



    

