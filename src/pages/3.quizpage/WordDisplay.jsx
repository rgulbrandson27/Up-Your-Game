import React from 'react';
import {useEffect, useState, useRef} from 'react';
import 'tailwindcss/tailwind.css';

const WordDisplay = ({ selectedWordList, hintRequested, evaluateGuessWord, setHintRequested, resetInputValues, setResetInputValues, correctlyGuessedWords, hintsRemaining, setHintsRemaining, cancelHintsRemaining }) => {

    const displayLength = selectedWordList.length || 7;
    const lastBox = displayLength - 1;
    
    const [inputValues, setInputValues] = useState(Array(displayLength).fill(''));
    const [isSubmitButtonFocused, setIsSubmitButtonFocused] = useState(false);
    const [animatedBorders, setAnimatedBorders] = useState(false);
    const [guessCount, setGuessCount] = useState(1);
    const [cursorStyle, setCursorStyle] = useState(Array(displayLength).fill('cursor-text'));
    const [backgroundColor, setBackgroundColor] = useState(Array(displayLength).fill('bg-yellow-300'));
    const [letterRevealed, setLetterRevealed] = useState(Array(displayLength).fill('false'));
    // const [isFilled, setIsFilled] = useState(Array(displayLength).fill(false));



    const inputRefs = useRef(Array( displayLength ).fill(false));   
    const priorLettersEntered = useRef(false);  
    const allLettersEntered = useRef(false);
    const revealedLetterEntered = useRef(false);
    const currentGuess = useRef('');
    const firstUnguessedWordRef = useRef(null);
    const unguessedWordLettersArrayRef = useRef([]);

    



    // useEffect(() => {
      // const displayHintAnimation = () => {
      //   setAnimatedBorders(true);
      // };
      // if (hintRequested) {
      // displayHintAnimation();
      // }
    // }, [hintRequested]);
    
    firstUnguessedWordRef.current =  (selectedWordList.words.find(word => !correctlyGuessedWords.includes(word)));


    useEffect(() => {
      // Cursor defaults to first input box.
      inputRefs.current[0]?.focus();
    }, []);

    // useEffect(() => {
    //   resetAfterCancel();
    // }, [cancelHintRequest])

    
    useEffect(() => {
      if (hintRequested) {
      evaluateGuessedLetters(firstUnguessedWordRef, inputRefs);
    } else {
      setCursorStyle(Array(displayLength).fill('cursor-text'));
      setBackgroundColor(Array(displayLength).fill('bg-yellow-300'));
    }
  }, [hintRequested]);
  
  useEffect(() => {
    resetInputValuesForNewGame(resetInputValues);
    setResetInputValues(false);
  }, [resetInputValues])
  
  function resetInputValuesForNewGame(resetInputValues) {
    if (resetInputValues) {
    setInputValues(Array(displayLength).fill(''));
    }
  }

  function handleRevealLetter(index) {
    const letterToReveal = unguessedWordLettersArrayRef.current[index];

    if (letterToReveal ) {
      const newInputValues = [...inputValues];
      newInputValues[index] = letterToReveal; // Update the input value to the revealed letter
      setInputValues(newInputValues);
      
      const newBackgroundColor = [...backgroundColor];
      newBackgroundColor[index] = 'bg-yellow-400'; 
      setBackgroundColor(newBackgroundColor);

      const disableCursor = [...cursorStyle];
      disableCursor[index] = 'cursor-not-allowed';
      setCursorStyle(disableCursor);

      if (hintsRemaining > 0) {
        setHintsRemaining(prev => prev - 1);
        console.log(hintsRemaining)
      }
      setHintRequested(false);
    }
  }

    function evaluateGuessedLetters(firstUnguessedWordRef, inputRefs) {
      if (firstUnguessedWordRef.current) {
        console.log("word:", firstUnguessedWordRef.current);
        //turn the next unguessed word into an array of letters
        unguessedWordLettersArrayRef.current = firstUnguessedWordRef.current.split('');
        console.log("correct letters array:", unguessedWordLettersArrayRef.current);
        } else {
          console.log("UnguessedWord is Not Yet Set.");
        }
      
        // Prepare arrays to hold the new styles
      const newCursorStyles = Array(displayLength).fill('cursor-text');
      const newBackgroundColors = Array(displayLength).fill('bg-yellow-300');

      //turn inputs (or lack of) into an array of letters or spaces
      const inputValues = inputRefs.current.map(ref => ref?.value || '');   //question mark refers to "chaining."
      console.log("guessed letters array:", inputValues);


      //compare both arrays
      for (let index = 0; index < inputValues.length; index++) {
        const correctLetter = unguessedWordLettersArrayRef.current[index];
        const guessedLetter = inputValues[index];

    if (guessedLetter === "") {
      newCursorStyles[index] = 'cursor-pointer';
      newBackgroundColors[index] = 'bg-yellow-300';
    } else if (guessedLetter === correctLetter) {
      newCursorStyles[index] = 'cursor-not-allowed';
      newBackgroundColors[index] = 'bg-green-600';
    } else {
      newCursorStyles[index] = 'cursor-pointer';
      newBackgroundColors[index] = 'bg-red-400';
    }
  }   
  // Update state with new styles
  setCursorStyle(newCursorStyles);
  setBackgroundColor(newBackgroundColors);
}  

    const checkIfMastered = () => {
      console.log("cgw:" + correctlyGuessedWords.length);
      console.log(selectedWordList.words.length);
      if (correctlyGuessedWords.length > 0) {
        (correctlyGuessedWords.length === selectedWordList.words.length)
        console.log("list is mastered")
        return true;
      }
    }

    const handleInputChange = (e, index) => {
        let value = e.target.value;

        //uppercase letter only validation
        if (value >= 'A' && value <= 'Z') {
          return;
        } else if (value >= 'a' && value <= 'z') {
          value = value.toUpperCase();
         } else {
          value = ''; 
          }
    
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);
    
    if (index === lastBox && value !== '' && priorLettersEntered) {
      setIsSubmitButtonFocused(true);
    }
    // Focus on the next input if value is not empty
    if (index < lastBox && value !== '') {
      inputRefs.current[index + 1].focus();
      }

      priorLettersEntered.current = updatedValues.slice(0, lastBox).every(val => val !== '');
      allLettersEntered.current = updatedValues.every(val => val !== '');
    };

    const handleKeyDown = (e, index) => {
      // Prevent the default tab behavior when shift + tab is pressed
      if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();

        if (index > 0) {
          inputRefs.current[index - 1].focus();
          // Select the text in the input box for immediate overwrite
          inputRefs.current[index - 1].select();
        }
      } else if (e.key === 'Tab' && !e.shiftKey && index === lastBox) {
        // If 'Tab' is pressed and it's the last input box, focus on the submit button
      }
      setIsSubmitButtonFocused(true);
  
      // Move focus to the previous input box when shift + tab is pressed
      if (e.key === 'Tab' && e.shiftKey && index > 0) {
        inputRefs.current[index - 1].focus();
      }
  
      // If 'Tab' is pressed and it's the last input box, focus on the submit button
      if (e.key === 'Tab' && index === lastBox) {
        setIsSubmitButtonFocused(true);
      };
    }

      //first display message (upon hover only) "once you request a hint, you must commit to finish word"  do you still want to request?


    const handleSubmitGuess = async () => {
      const allLettersEntered = inputValues.every((letter, index) => 
      letter !== '' || revealedLetterEntered.current[index] === true // Check for revealed letter
    );
  
    if (!allLettersEntered) {
      window.alert("All letters must be entered.");
    } else {
      const values = inputRefs.current.map(ref => ref.value);
      console.log('Input values:', values);

        currentGuess.current = values.join('');
        console.log(currentGuess.current);

        await evaluateGuessWord(currentGuess.current);

        setGuessCount((prevCount) => prevCount + 1);
        console.log(guessCount);

        setInputValues(Array(displayLength).fill(''));
        setIsSubmitButtonFocused(false);
        inputRefs.current[0].focus();
      }
    };

//////////////////////////////////////
    return (
      <div>
        <div className="wordDisplay border-2 bg-yellow-100 border-blue-500 p-3 rounded-md relative">
          <div className="flex justify-center gap-1 md:gap-2">
          {[...Array(displayLength)].map((_, index) => (
            <div key={index} className="flex items-center">  
               
              <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={inputValues[index]}
                className={`letter-box input text-center aspect-square rounded-md 
                          overflow-hidden input-secondary max-w-xs w-[calc(100%-2px)] 
                          h-[calc(100%-2px)] top-[1px] left-[1px] border-2 text-4xl md:text-5xl border-gray-600
                          ${backgroundColor[index]} ${cursorStyle[index]}
                          ${hintRequested ? 'caret-transparent' : ''}`}
               
                maxLength={1}
                // onChange={(e) => handleInputChange(e, index)}
                // onKeyDown={(e) => handleKeyDown(e, index)}
                placeholder={hintRequested && inputValues[index] === '' ? '?' : ''}
                onChange={hintRequested ? undefined : (e) => handleInputChange(e, index)}
                onKeyDown={hintRequested ? undefined : (e) => handleKeyDown(e, index)}
                // cursor={hintRequested ? cursor-pointer : cursor-default}
                // onClick={hintRequested ? () => handleInputClick(index) : undefined} 
                // onClick={hintRequested ? () => handleRevealLetter(index) : undefined} 
                // disabled={hintRequested}
                onClick={hintRequested ? () => handleRevealLetter(index) : undefined}  
                disabled={backgroundColor[index] === 'bg-green-600' || letterRevealed[index] === true } // Disable if green

              />
            </div>
          ))}
        </div>
      </div>
        <div className="flex justify-center mt-2">
          <button
            onKeyDown={handleSubmitGuess}
            onClick={handleSubmitGuess} 
            className={`bg-blue-400 border-2 border-black hover:bg-blue-700 text-white text-md px-1 h-1/2 rounded-md
             sm:mt-2 md:w-20
           
              ${isSubmitButtonFocused ? 'focus:bg-blue-700' : ''}
              ${hintRequested ? 'cursor-not-allowed opacity-50' : ''}
            `}
            onBlur={() => setIsSubmitButtonFocused(false)}
            disabled={hintRequested}>Submit
          </button>
          </div>
        </div>
    );
}
export default WordDisplay;


// DON'T DELETE
// <div className="relative">
// <div className="bg-[purple] h-[300px] w-[300px] absolute overflow-hidden">
// <div className="absolute conic-background h-[500px] w-[500px] animate-spin top-[-35%] right-[-35%]" style={{ animationDuration: '4s' }}></div>
// </div>

        
    
///// Note on Hoisting /////
// JavaScript functions defined using function declarations are hoisted, 
// meaning you can call them before their definition in the code. 
// However, arrow functions and regular variable assignments (like with const) 
// are not hoisted in the same way, so those need to be defined before they're used.