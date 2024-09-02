import {useState, useEffect} from 'react';
import sixLetterStems from '../../data/bingoStems';

const Home = ({handleSelectionClick}) => {


  return (
    <>
    <div className="p-3">
      <p className="text-center text-4xl p-6 pb-2  m-0">Choose Your Challenge</p>
    </div>

    <div className="word-list-container w-5/6 sm:w-3/5 mx-auto">
        <p className="text-center text-2xl m-1">
          Top 25 Six-Letter-Stems
        </p>




        <div className="word-list-group grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5 grid-rows-auto tracking-wide mt-8
        
        ">
        {sixLetterStems.map((wordListInfo) => (
        <button 
          key={wordListInfo.id} 
          className="text-xl tracking-wider border-2 hover:border-3 border-blue-800 rounded-md flex place-content-center shadow-none transition-shadow duration-300 ease-in-out 
          hover:shadow-lg hover:shadow-black/30 hover:bg-pink-300 hover:cursor-pointer p-.5 relative group
          bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800

          "    
          onClick={() => handleSelectionClick(wordListInfo)}>
          {/* setSelectedWordList(wordListName)
          console.log(wordListName.id) */}
         
          {wordListInfo.listName}
          {/* <div className="bg-yellow-200 text-sm rounded-full h-1/3">
          {wordListName.id}</div> */}
            <span className="absolute bg-black text-pink-300 -bottom-1 -right-1 flex justify-center items-center mr-0 mb-0 text-sm font rounded-full w-6 h-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">{wordListInfo.id}</span>
            {/* flex justify-center items-center -top-1 -right-1 */}
        </button>
        ))}
        </div>
      </div>
    </>
  );
}

export default Home;