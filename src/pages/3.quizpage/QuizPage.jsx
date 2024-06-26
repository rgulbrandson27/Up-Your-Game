import React from 'react';
import { useState, useEffect } from 'react';
import DifficultyLevels from './DifficultyLevels';
import CorrectWordList from './CorrectWordList';
import Keyboard from './Keyboard';
import WordDisplay from './WordDisplay';
import Hints from './Hints';
import Mneumonic from './Mneumonic';
import PropTypes from 'prop-types';

const QuizPage = ({selectedWordList}) => {

const [stemWordLetters, setStemWordLetters] = useState([]);
const [hintsRemaining, setHintsRemaining] = useState([10]);
const [hintRequested, setHintRequested] = useState(false);

useEffect(() => {
  console.log("selectedWordList has passed to quizpage:", selectedWordList);
  setStemWordLetters(selectedWordList.listName.split(""));
  console.log(stemWordLetters);
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

      {/* <h2>Quiz Page</h2> */}
      <div className="grid grid-cols-12 grid-rows-12 w-screen h-screen flex-grow-0">
        <h1 className="col-span-12 row-span-1 row-start-0 text-center text-2xl lg:text-3xl -mt-2 lg:pt-3">{selectedWordList.listName} ({selectedWordList.id})</h1>
        <div 
            className="grid row-start-2 row-span-2 mb-10 col-start-2 col-span-10 mt-10
            md:row-start-4 md:row-span-1 md:col-start-2 md:col-span-6   
            lg:col-start-3 lg:col-span-5">
            <WordDisplay selectedWordList={selectedWordList} stemWordLetters={stemWordLetters} hintRequested={hintRequested}/>
        </div>

        <div className="correct-word-list grid col-span-6 col-start-4 row-span-8 row-start-5 mt-5 overflow-scroll
          md:row-start-2 md:row-span-9 md:col-start-9 md:col-span-3
  
          lg:row-start-2 lg:rows-span-8 lg:col-start-9 lg:col-span-3 lg:mr-10">
            < CorrectWordList selectedWordList={selectedWordList} stemWordLetters={stemWordLetters}/>
        </div>

 
          <div className="grid row-start-2 row-span-1 col-start-4 col-span-1 -mt-4 mb-14 ml-2
          md:row-start-6 md:col-start-4 md:mx-4
          lg:col-start-3 lg:row-start-7 lg:col-span-1">
          < Hints
              hintRequested = {hintRequested}
              setHintRequested = {setHintRequested}
              onClick={handleHintClick} />
          </div>

          <div className="grid row-start-2 row-span-1 col-start-6 col-span-4 -mt-4 mb-14 p-0 text-sm ml-4
          md:row-start-6 md:col-start-4 md:mx-4
          lg:col-start-3 lg:row-start-7 lg:col-span-1">
              < Mneumonic />
         
          </div>


          </div>
        </div>
     
      
    );
  };
  
  export default QuizPage;
  



    

