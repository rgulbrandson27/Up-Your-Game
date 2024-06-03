import {useState, useEffect} from 'react';
import sixLetterStems from '../../data/bingoStems';



const Home = ({handleSelectionClick}) => {

  return (
    <>
    <div className="p-3">
      <p className="text-center text-4xl p-3 pb-0 m-0">Choose Your Challenge</p>
    </div>

    <div className="word-list-container w-5/6 sm:w-3/5 mx-auto mt-2">
        <p className="text-center text-2xl m-1">
          Top 25 Six-Letter-Stems
        </p>

        <div className="word-list-group grid grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5 grid-rows-auto tracking-wide mt-3">
        {sixLetterStems.map((wordListInfo) => (
        <div 
          key={wordListInfo.id} 
          className="bg-pink-200 text-xl tracking-wider border-2 border-violet-800 rounded-md flex place-content-center shadow-none transition-shadow duration-300 ease-in-out 
          hover:shadow-lg hover:shadow-black/30 hover:bg-pink-300 hover:cursor-pointer p-.5 relative group"    
          onClick={() => handleSelectionClick(wordListInfo)}>
          {/* setSelectedWordList(wordListName)
          console.log(wordListName.id) */}
         
          {wordListInfo.listName}
          {/* <div className="bg-yellow-200 text-sm rounded-full h-1/3">
          {wordListName.id}</div> */}
            <span className="absolute bg-black text-pink-300 -bottom-1 -right-1 flex justify-center items-center mr-0 mb-0 text-sm font rounded-full w-6 h-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">{wordListInfo.id}</span>
            {/* flex justify-center items-center -top-1 -right-1 */}
        </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default Home;