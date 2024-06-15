import React from 'react';
import { useState, useEffect } from 'react';
import DifficultyLevels from './DifficultyLevels';
import CorrectWordList from './CorrectWordList';
import Keyboard from './Keyboard';
import WordDisplay from './WordDisplay';
import Hints from './Hints';
import PropTypes from 'prop-types';

const QuizPage = ({selectedWordList}) => {

const [stemWordLetters, setStemWordLetters] = useState([]);

useEffect(() => {
  console.log("selectedWordList has passed to quizpage:", selectedWordList);
  setStemWordLetters(selectedWordList.listName.split(""));
  console.log(stemWordLetters);
}, [selectedWordList]);

  return (
    <div>
      {/* <h2>Quiz Page</h2> */}
      {/* <p>Selected Word List: {selectedWordList ? selectedWordList.id : 'Unknown'}</p> */}
      <div className="grid grid-cols-12 grid-rows-12 w-screen h-screen flex-grow-0">
        <h1 className="col-span-12 row-span-1 text-center text-2xl pt-2 lg:pt-3">{selectedWordList.listName}</h1>
        <div 
            className="grid row-start-2 row-span-2 col-start-3 col-span-8 
                lg:col-start-3 lg:col-span-3;
                mt-4">
            <WordDisplay selectedWordList={selectedWordList} stemWordLetters={stemWordLetters}/>
          </div>
          <div className="correct-word-list grid col-span-6 col-start-4 row-span-9 row-start-5 
          md:row-start-6 
          mt-3 overflow-scroll
          lg:row-start-4 lg:rows-span-2 lg:col-start-9 lg:col-dlmn">
            < CorrectWordList selectedWordList={selectedWordList} stemWordLetters={stemWordLetters}/>
          </div>dx

          
          {/* <div className="grid row-start-2 row-span-8 col-start-11 col-span-2 mx-2">
          < Hints /> 
          </div> */}
        </div>
     
      </div>
    );
  };
  
  export default QuizPage;
  
{/*   
  // const [loading, setLoading] = useState(true);
  // console.log(selectedWordList); */}

  {/* // useEffect(() => { */}
  {/* //   console.log(selectedWordList.listName)
  // //   if (selectedWordList.listName !== "SAMPLE" && isNewSelection) { */}
  {/* // //     setLoading(false);
  // //   } else { */}
  {/* // //     setLoading(true)
  // //   } */}


    

