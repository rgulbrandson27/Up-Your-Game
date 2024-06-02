import React from 'react';
import {useEffect} from 'react';
import DifficultyLevels from './DifficultyLevels';
import CorrectWordList from './CorrectWordList';
import Keyboard from './Keyboard';
import WordDisplay from './WordDisplay'

const QuizPage = ({selectedWordList}) => {

  useEffect(() => {
    console.log('selectedWordList has changed:',selectedWordList);
  }, [selectedWordList])
  console.log(selectedWordList)

  return (
    <div className="grid grid-cols-12 grid-rows-12 w-svw h-svh flex-grow-0">
      <h1 className="col-span-12 row-span-1 text-center text-2xl pt-2 lg:pt-3" >Quiz Page</h1>

      <div className="correct-word-list grid col-span-8 col-start-3 row-span-7 row-start-2 my-2 overflow-y-scroll">
      < CorrectWordList selectedWordList={selectedWordList} />
      </div>

      <div 
      className="grid row-start-9 row-span-1 
                col-start-3 col-span-8 
                md:col-start-4 md:col-span-6 
                xl:col-start-5 xl:col-span-4 
                mt-4">
        <WordDisplay selectedWordList = {selectedWordList}/>
      </div>

      {/* <div className="grid row-start-6 row-span-4
                    col-start-2 col-span-10
                    md:col-start-3 md:col-span-8 
                    xl:col-start-4 xl:col-span-6
                    ">
        < Keyboard />
      </div> */}

    

      {/* < DifficultyLevels /> */}
    
    </div>
  )
}

export default QuizPage

