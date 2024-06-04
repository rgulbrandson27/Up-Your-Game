import React from 'react';
import { useState, useEffect } from 'react';
import DifficultyLevels from './DifficultyLevels';
import CorrectWordList from './CorrectWordList';
import Keyboard from './Keyboard';
import WordDisplay from './WordDisplay'
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
      <h2>Quiz Page</h2>
      {/* <p>Selected Word List: {selectedWordList ? selectedWordList.id : 'Unknown'}</p> */}
      <div className="grid grid-cols-12 grid-rows-12 w-svw h-svh flex-grow-0">
        <h1 className="col-span-12 row-span-1 text-center text-2xl pt-2 lg:pt-3" >Quiz Page</h1>
          <div className="correct-word-list grid col-span-8 col-start-3 row-span-7 row-start-2 my-2 overflow-y-scroll">
            < CorrectWordList selectedWordList={selectedWordList} stemWordLetters={stemWordLetters}/>
          </div>

          <div 
            className="grid row-start-9 row-span-1 
                col-start-3 col-span-8 
                md:col-start-4 md:col-span-6 
                xl:col-start-5 xl:col-span-4 
                mt-4">
            <WordDisplay selectedWordList={selectedWordList} stemWordLetters={stemWordLetters}/>
          </div>
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

    {/* < DifficultyLevels /> */}
    

