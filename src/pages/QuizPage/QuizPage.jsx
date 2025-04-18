import React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import CorrectWordList from './CorrectWordList';
import WordDisplay from './WordDisplay';
import Hints from './Hints';
// import Mneumonic from './Mneumonic';
import IncorrectGuessAlert from './IncorrectGuessAlert';
import {DataContext} from '../../App.jsx';

const QuizPage = (
  // { selectedWordList, currentUser, addToMastered, setNavigateTo, updateDateToToday }
) => {

const { currentUser, selectedWordList, addToMastered, setNavigateTo, updateDateToToday } = useContext(DataContext);

const [hintsRemaining, setHintsRemaining] = useState(10);
const [hintRequested, setHintRequested] = useState(false);
const [cancelHintRequest, setCancelHintRequest] = useState(false);
const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);
const [correctlyGuessedWords, setCorrectlyGuessedWords] = useState([]);
const [displayMasteredModal, setDisplayMasteredModal] = useState(false);
const [displayAlreadyMasteredModal, setDisplayAlreadyMasteredModal] = useState(false);
const [currentCorrectGuess, setCurrentCorrectGuess] = useState('');
const [displayIncorrectAlert, setDisplayIncorrectAlert] = useState(false);
const [displayNoHintsRemaining, setDisplayNoHintsRemaining] = useState(false);
const [isDisabled, setIsDisabled] = useState(false); 
const [resetInputValues, setResetInputValues] = useState(false);

const firstUnguessedWordRef = useRef(null);

useEffect(() => {
  console.log("selectedWordList has passed to quizpage:", selectedWordList);
  // setLetterInputBoxes(selectedWordList.listName.split(""));
}, [selectedWordList]);

useEffect(() => {
  checkIfMastered();
}, [correctlyGuessedWords])

useEffect(() => {
  alertNoHintsRemaining();
}, [hintsRemaining])

const alertIncorrect = () => {
  setIncorrectGuessCount(prevCount => prevCount + 1);
  setDisplayIncorrectAlert(true);
  setTimeout(() => {
    setDisplayIncorrectAlert(false);
  }, 2000);
};

const hintsUsed = 10 - hintsRemaining;

const alertNoHintsRemaining = () => {
  if (hintsRemaining < 0)
  setDisplayNoHintsRemaining(true);
}

const evaluateGuessWord = (guessWord) => {
  switch(true) {
    //Word already guessed.
    case correctlyGuessedWords.includes(guessWord):
      console.log(`"${guessWord}" has already been guessed correctly.`);
      break;
    //Correct guess.
    case selectedWordList.words.includes(guessWord):
      setCorrectlyGuessedWords(prev => [...prev, guessWord]);
      setCurrentCorrectGuess(guessWord);
      console.log("Correct guess");
      break;
    //Incorrect guess.
      default:
        console.log("Incorrect guess");
      alertIncorrect();
      break;
  }
};

const handleClose = ()  => {
  setDisplayNoHintsRemaining(false);
}

const checkIfMastered = () => {
  if (correctlyGuessedWords.length === selectedWordList.words.length) {
    const isDuplicateMasteredWord = currentUser.mastered.some(
      masteredItem => masteredItem.word === selectedWordList.listName
      );
      if (isDuplicateMasteredWord) {
        setDisplayAlreadyMasteredModal(true);
      } else
    setDisplayMasteredModal(true);
  }
}; 

const handleAddToMastered = async () => {
  const masteredListUpdate = [...currentUser.mastered, {
    number: currentUser.mastered.length + 1,
    word: selectedWordList.listName, 
    hints: 0,
    date: new Date().toLocaleDateString()
  }];
  await addToMastered(masteredListUpdate);
  setDisplayMasteredModal(false);
  setNavigateTo('/userdashboard');
}

const getPreviousDate = () => {
  const masteredItem = currentUser.mastered.find(
    item => item.word === selectedWordList.listName
  );
  return masteredItem ? masteredItem.date : 'Date not available';
};

const getPreviousHintsUsed = () => {   //  for mastered list only
  const prevHintsUsed = currentUser.mastered.find(
    item => item.word === selectedWordList.listName
  );
  return prevHintsUsed ? prevHintsUsed.hints : 'Hint Not Available';
};

const handleChangeDate = async () => {
  const updatedMasteredList = currentUser.mastered.map((item) =>
    item.word === selectedWordList.listName
      ? { ...item, date: new Date().toLocaleDateString() }
      : item
  );
  try {
    await addToMastered(updatedMasteredList);
    await updateDateToToday(); // Ensure the date update is processed
    setDisplayAlreadyMasteredModal(false);
    setNavigateTo('/userdashboard');
  } catch (error) {
    console.error("Error updating mastered list date:", error);
  }
};

const handleRestart = () => {
  setHintsRemaining([10]); // Reset to initial hints
  setHintRequested(false); // Reset hint requested state
  setCancelHintRequest(true); // Reset hint request cancelled state
  setIncorrectGuessCount(0); // Reset incorrect guess count
  setCorrectlyGuessedWords([]); // Reset correctly guessed words
  setDisplayMasteredModal(false); // Reset mastered modal display
  setDisplayNoHintsRemaining(false);
  setResetInputValues(true);
    console.log("restart game");
}

const handleNavigateToUserDashboard = () => {
  setDisplayAlreadyMasteredModal(false);
    navigate('/userdashboard');
}

// const declareAsMastered = () => {
//   if (checkIfMastered(true))  {
//   setDisplayMasteredModal(true);
//   }}

// declareAsMastered();

  return (
    <div className="grid grid-cols-12 grid-rows-12 w-screen h-screen">
{/* DON'T DELETE */}
    {/* <div className="relative">
      <div className="bg-[purple] h-[300px] w-[300px] absolute overflow-hidden">
        <div className="absolute conic-background h-[500px] w-[500px] animate-spin top-[-35%] right-[-35%]" style={{ animationDuration: '8s' }}></div>
        </div>
      <div className="bg-blue-300 h-[280px] w-[280px] ml-[10px] mt-[10px] relative"></div>
    </div> */}
{/* 
      <div className="grid grid-cols-12 grid-rows-12 w-screen h-screen flex-grow-0"> */}
        <h1 className="col-span-12 text-center text-3xl lg:text-3xl mt-3">{selectedWordList.listName} ({selectedWordList.id})
        </h1>
        <div className="grid col-span-4 col-start-5 row-start-2 row-span-1 py-1
        lg:col-span-2 lg:col-start-3 lg:row-start-7 lg:row-span-2 lg:my-4 disabled">
                  {/* {`hover:bg-green-600 bg-green-300 h-3/4 flex justify-center items-center p-[5px] border-black border-2 rounded-md ${hintsRemaining < 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}  */}

          < Hints 
              hintRequested={hintRequested}
              setHintRequested={setHintRequested}
              cancelHintRequest={cancelHintRequest}
              setCancelHintRequest={setCancelHintRequest}
              hintsRemaining={hintsRemaining}
              isDisabled={hintsRemaining < 1} // prop passes only if condition met
            />
        </div>
        <div className="grid col-span-12 items-start row-start-3 -m-2 text-lg text-center
        lg:row-start-7 lg:row-span-1 lg:col-start-5 lg:ml-4 lg:col-span-3 lg:text-lg lg:mt-8 xl:col-start-5 xl:-ml-6">
          <p> Hints Remaining --- {hintsRemaining}</p>
        </div>
        
        <div className="grid row-start-4 row-span-1 col-start-2 col-span-10 -mt-6 sm:mb-10  md:col-start-3 md:col-span-8
        lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-6">
            <WordDisplay selectedWordList = {selectedWordList} hintRequested = {hintRequested} setHintRequested = {setHintRequested} correctlyGuessedWords = {correctlyGuessedWords} 
            firstUnguessedWordRef = {firstUnguessedWordRef}
            evaluateGuessWord = {evaluateGuessWord} 
            cancelHintRequest = {cancelHintRequest}
            setCancelHintRequest = {setCancelHintRequest}
            hintsRemaining = {hintsRemaining}
            setHintsRemaining = {setHintsRemaining}
            resetInputValues = {resetInputValues}
            setResetInputValues = {setResetInputValues}
            />
        </div>

        <div className="grid col-span-12 row-start-6 lg:row-start-2 row-span-7 lg:row-span-10 justify-items-center mb-4 lg:col-span-12 lg:col-start-6">
            <div className="correct-word-list w-1/2 md:-mx-8 grid row-start-6 row-span-5 overflow-scroll -mt-2 sm:mt-4 
             justify-items-center
             lg:row-start-2 lg:row-span-9 lg:col-start-6 lg:col-span-6
              xl:ml-10">
            < CorrectWordList selectedWordList={selectedWordList}  correctlyGuessedWords={correctlyGuessedWords}
              currentCorrectGuess={currentCorrectGuess}/>
        </div>
      </div>
            {/* <IncorrectGuessAlert 
                incorrectGuessCount={incorrectGuessCount} 
                handleRestart={handleRestart}/>
    */}
          <div className="z-10 absolute mt-20 flex justify-self-center">
          {displayIncorrectAlert && 
            (
              <IncorrectGuessAlert 
                incorrectGuessCount={incorrectGuessCount} 
                handleRestart={handleRestart}
             />
            )}
          {displayMasteredModal && 
            (
            <div className="w-96 h-[40%] bg-white border-black border-2 flex flex-col rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-xl mb-4">Congratulations!  You have mastered this Bingo Stem!</h3>
              <button className="btn bg-green-400 hover:bg-green-600 border-2 border-green-800 rounded-lg p-2"
                onClick={() => handleAddToMastered()}
                >Add to Mastered List</button>
              <button className="btn bg-pink-300 hover:bg-pink-400 border-2 border-pink-800 rounded-lg p-2"
              onClick={() => handleRestart()}
                >I'd better practice a bit more.</button>
            </div>
            )}

            {displayAlreadyMasteredModal && 
            (
               <div className="w-96 h-[40%] bg-white border-black border-2 flex flex-col rounded-lg p-6">
                 <h3 className="font-bold rounded-lg border-2 border-pink-400 text-center text-xl my-2">Congratulations!  You have once again mastered this stem word with
                 <span className="text-pink-500"> {hintsUsed}</span> hints used:</h3>
                  <h4 className="font-bold text-lg text-center">Previously mastered on: {getPreviousDate()}</h4>
                  <h6 className="font-bold text-lg text-center mb-4">Previous hints used:  {getPreviousHintsUsed()}</h6>

                 <button className="btn bg-green-400 hover:bg-green-600 border-2 border-green-800 rounded-lg p-2 my-2"
                   onClick={() => handleChangeDate()}
                   >Use Today's Date</button>
                 <button className="btn bg-pink-400 hover:bg-pink-600 border-2 border-pink-800 rounded-lg p-2 my-2"
                 onClick={() => handleNavigateToUserDashboard()}
                   >Keep the original date.</button>
               </div>
               )}

              {displayNoHintsRemaining && (
                  <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-md">
               
                    <h2 className="text-2xl font-bold">You have used all of your hints!</h2>
                    <button className="flex justify-center text-lg font-bold border-blue-400 border-2 rounded-lg p-2 mt-4 text-blue-400 hover:bg-blue-600 hover:text-white" 
                    onClick={()=> handleClose() }>Keep playing without hints.</button>
                         <button className="flex justify-center text-lg font-bold border-2 rounded-lg p-2 my-4 border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white" 
                    onClick={()=> handleRestart() }>Start Over</button>
                        
                         <p className="font-bold">GOOD LUCK!</p>
                  </div>
               )}
          </div>
    </div>
    );
  };
  
  export default QuizPage;
  



    
















// import React from 'react';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CorrectWordList from './CorrectWordList';
// import Keyboard from './Keyboard';
// import WordDisplay from './WordDisplay';
// import Hints from './Hints';
// import Mneumonic from './Mneumonic';
// import IncorrectGuessAlert from './IncorrectGuessAlert';

// const QuizPage = ({ selectedWordList, currentUser, addToMastered, setNavigateTo, updateDateToToday }) => {

// const [letterInputBoxes, setLetterInputBoxes] = useState([]);
// const [hintsRemaining, setHintsRemaining] = useState([10]);
// const [hintRequested, setHintRequested] = useState(false);
// const [cancelHintRequest, setCancelHintRequest] = useState(false);
// const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);
// const [correctlyGuessedWords, setCorrectlyGuessedWords] = useState([]);
// const [displayMasteredModal, setDisplayMasteredModal] = useState(false);
// const [displayAlreadyMasteredModal, setDisplayAlreadyMasteredModal] = useState(false);
// const [currentCorrectGuess, setCurrentCorrectGuess] = useState('');

// const firstUnguessedWordRef = useRef(null);



//  useEffect(() => {
//   console.log("selectedWordList has passed to quizpage:", selectedWordList);
  // console.log(firstUnguessedWordRef.current);
  // setLetterInputBoxes(selectedWordList.listName.split(""));
  // console.log(letterInputBoxes);
// }, [selectedWordList]);

// useEffect(() => {
//   checkIfMastered();
// }, [correctlyGuessedWords])



// useEffect(() => {
//   if (addToMastered()) {
//     setDisplayMasteredModal(false);
//   }
// }, [addToMastered]);

// const displayIncorrectAlert = () => {
//   setIncorrectGuessCount(prevCount => prevCount + 1);
//   console.log("incorrect", incorrectGuessCount);
// };

// const handleHintRequest = () => {
//   console.log("hint requested");
// }


// const evaluateGuessWord = (guessWord) => {
//   switch(true) {
//     //Word already guessed.
//     case correctlyGuessedWords.includes(guessWord):
//       console.log(`"${guessWord}" has already been guessed correctly.`);
//       break;
//     //Correct guess.
//     case selectedWordList.words.includes(guessWord):
//       setCorrectlyGuessedWords(prev => [...prev, guessWord]);
//       setCurrentCorrectGuess(guessWord);
//       console.log("Correct guess");
//       break;
//     //Incorrect guess.
//       default:
//         console.log("Incorrect guess");
//       displayIncorrectAlert();
//       break;
//   }
// };





// const checkIfMastered = () => {
//   if (correctlyGuessedWords.length === selectedWordList.words.length) {
    
//     const isDuplicateMasteredWord = currentUser.mastered.some(
//       masteredItem => masteredItem.word === selectedWordList.listName
//       );
//       if (isDuplicateMasteredWord) {
//         setDisplayAlreadyMasteredModal(true);
//       } else

//     setDisplayMasteredModal(true);
//   }
// }; 

// const handleAddToMastered = async () => {
//   const masteredListUpdate = [...currentUser.mastered, {
//     number: currentUser.mastered.length + 1,
//     word: selectedWordList.listName, // Example: listName as the mastered word
//     hints: 0,
//     date: new Date().toLocaleDateString()
//   }];

//   await addToMastered(masteredListUpdate);
//   setDisplayMasteredModal(false);
//   setNavigateTo('/userdashboard');

// }
// const getPreviousDate = () => {
//   const masteredItem = currentUser.mastered.find(
//     item => item.word === selectedWordList.listName
//   );
//   return masteredItem ? masteredItem.date : 'Date not available';
// };


// const handleChangeDate = async () => {
//   const updatedMasteredList = currentUser.mastered.map((item) =>
//     item.word === selectedWordList.listName
//       ? { ...item, date: new Date().toLocaleDateString() }
//       : item
//   );
//   try {
//     await addToMastered(updatedMasteredList);
//     await updateDateToToday(); // Ensure the date update is processed
//     setDisplayAlreadyMasteredModal(false);
//     setNavigateTo('/userdashboard');
//   } catch (error) {
//     console.error("Error updating mastered list date:", error);
//   }
// };

// const handleRestart = () => {
//   setHintsRemaining([10]); // Reset to initial hints
//   setHintRequested(false); // Reset hint requested state
//   setCancelHintRequest(true); // Reset hint request cancelled state
//   setIncorrectGuessCount(0); // Reset incorrect guess count
//   setCorrectlyGuessedWords([]); // Reset correctly guessed words
//   setDisplayMasteredModal(false); // Reset mastered modal display
//     console.log("restart game");
// }

// const handleNavigateToUserDashboard = () => {
//   setDisplayAlreadyMasteredModal(false);
//     setNavigateTo('/userdashboard');
// }

// const declareAsMastered = () => {
//   if (checkIfMastered(true))  {
//   setDisplayMasteredModal(true);
//   }}

// declareAsMastered();

  // return (
  //   <div className="grid grid-cols-12 grid-rows-12">

{/* DON'T DELETE */}
    {/* <div className="relative">
      <div className="bg-[purple] h-[300px] w-[300px] absolute overflow-hidden">
        <div className="absolute conic-background h-[500px] w-[500px] animate-spin top-[-35%] right-[-35%]" style={{ animationDuration: '8s' }}></div>
        </div>
      <div className="bg-blue-300 h-[280px] w-[280px] ml-[10px] mt-[10px] relative"></div>
    </div> */}

      // <div className="grid w-screen h-screen flex-grow">
      //   <h1 className="col-span-12 text-center text-2xl lg:text-3xl mt-3">
      //     {selectedWordList.listName} ({selectedWordList.id})
      //   </h1>
        
      //   <div className="grid row-start-2 col-span-2 justify-center items-center">
      //     < Hints 
      //       hintRequested = {hintRequested}
      //       setHintRequested = {setHintRequested}
      //       cancelHintRequest = {cancelHintRequest}
      //       setCancelHintRequest = {setCancelHintRequest}
      //     />
      //   </div>
        
  //       <div className="grid row-start-3 row-span-1 col-span-12 p-0 text-sm text-center
  //         md:row-start-6 md:col-start-5 md:col-span-3 md:-mt-4
  //         lg:col-start-6 lg:row-start-5 lg:col-span-2 lg:mr-2 lg:ml-0 lg:mt-10">
  //         <p className="text-md">Hints Remaining = 10 </p>
  //       </div>





  //       <div 
  //           className="grid row-start-3 row-span-2 mb-10 col-start-2 col-span-10 mt-10
  //           md:row-start-2 md:col-start-2 md:col-span-6 md:mb-10
  //           lg:col-start-3 lg:col-span-5 lg:row-start-2 lg:mt-116">
  //           <WordDisplay selectedWordList={selectedWordList} letterInputBoxes={letterInputBoxes} hintRequested={hintRequested} setHintRequested={setHintRequested} correctlyGuessedWords={correctlyGuessedWords} 
  //           firstUnguessedWordRef={firstUnguessedWordRef}
  //           evaluateGuessWord={evaluateGuessWord} 
  //           // evaluateGuessedLetters={evaluateGuessedLetters} 
  //           />
  //       </div>
  //       <div className="correct-word-list grid col-span-6 col-start-4 row-span-7 overflow-scroll
  //         row-start-4 mt-8
  //         md:row-start-2 md:mt-4 md:row-span-9 md:col-start-9 md:col-span-4 md:-ml-2 md:mr-4
  
  //         lg:row-start-2 lg:rows-span-8 lg:col-start-9 lg:col-span-3 lg:mr-4 lg:ml-4">
  //           < CorrectWordList selectedWordList={selectedWordList} letterInputBoxes={letterInputBoxes} correctlyGuessedWords={correctlyGuessedWords}
  //           currentCorrectGuess={currentCorrectGuess}/>
  //       </div>

  //         <div className="grid row-start-2 row-span-1 col-start-3 col-span-4 mt-2 mb-14 ml-2 p-0 text-sm
  //         md:row-start-6 md:col-start-2 md:col-span-3 md:mr-2 md:-mt-4
  //         lg:col-start-3 lg:row-start-5 lg:col-span-2 lg:ml-2 lg:mr-0 lg:mt-10">
          
  //         </div>

       

  //         <div className="z-10 col-span-12 -mt-24 md:-mt-96">
  //           {/* temporary quick fix for vertical alignment for medium and above screens  */}
  //         <IncorrectGuessAlert incorrectGuessCount={incorrectGuessCount} handleRestart={handleRestart}/>
  //         </div>

  //         <div className="z-10 absolute mt-20 flex justify-self-center">
  //         {displayMasteredModal && 
  //           (
  //           <div className="w-96 h-[40%] bg-white border-black border-2 flex flex-col rounded-lg p-6 space-y-4">
  //             <h3 className="font-bold text-xl mb-4">Congratulations!  You have mastered this Bingo Stem!</h3>
  //             <button className="btn bg-green-400 hover:bg-green-600 border-2 border-green-800 rounded-lg p-2"
  //               onClick={() => handleAddToMastered()}
  //               >Add to Mastered List</button>
  //             <button className="btn bg-pink-400 hover:bg-pink-600 border-2 border-pink-800 rounded-lg p-2"
  //             onClick={() => handleRestart()}
  //               >Not yet, I want to practice again, I'd like to try again first.</button>
  //           </div>
  //           )}

  //           {displayAlreadyMasteredModal && 
  //           (
  //              <div className="w-96 h-[40%] bg-white border-black border-2 flex flex-col rounded-lg p-6 space-y-4">
  //                <h3 className="font-bold rounded-lg border-2 border-pink-400 text-center text-xl">Congratulations!  You have once again mastered this stem word.</h3>
  //                 <h4 className="font-bold text-lg text-center">Previously mastered on: {getPreviousDate()}</h4>
  //                <button className="btn bg-green-400 hover:bg-green-600 border-2 border-green-800 rounded-lg p-2"
  //                  onClick={() => handleChangeDate()}
  //                  >Use Today's Date</button>
  //                <button className="btn bg-pink-400 hover:bg-pink-600 border-2 border-pink-800 rounded-lg p-2"
  //                onClick={() => handleNavigateToUserDashboard()}
  //                  >Keep the original date.</button>
  //              </div>
  //              )}
  //   </div>
  //         </div>






  //       </div>
  //   );
  // };
  
  // export default QuizPage;
  



    

